# IML-Dengue

Projeto de dengue usando dados do SINAN. A ideia é tratar os dados e depois usar isso junto com um site de triagem.

Por enquanto a parte mais avançada é a limpeza dos dados. O site ainda é mais uma simulação, não tem modelo de machine learning funcionando de verdade ainda.

## Dados

Estamos usando os arquivos de dengue:

```text
DENGBR17.parquet
DENGBR18.parquet
DENGBR19.parquet
```

Eles ficam na pasta `data/`.

## Tratamento de dados

A limpeza está na pasta `notebooks_limpeza/`.

Os arquivos principais são:

```text
dengue_data_cleaner.py
sinan_mappings.py
cbo_map.py
limpando_colunas_angel.ipynb
limpando_colunas_pedro.ipynb
limpando_colunas_ruan.ipynb
tratamento_dados_dengue.ipynb
```

A classe principal é `DengueDataCleaner`. Ela junta as limpezas dos notebooks e devolve um dataframe final.

Hoje o dataframe final ficou com:

```text
2.874.235 linhas
47 colunas
1.677.750 casos confirmados
1.196.485 casos descartados
```

## O que foi feito na limpeza

- Renomeamos as colunas do SINAN para nomes mais fáceis de usar.
- Criamos labels para alguns códigos, tipo sexo, raça, gestação, escolaridade, UF e classificação final.
- Adicionamos o mapeamento CBO para ocupação.
- Mantivemos `occupation_code` e criamos `occupation_name`.
- Mantivemos `pregnancy_status` e `race`.
- Mantivemos `notification_date`.
- Criamos `days_to_notification`.
- Tiramos colunas de encerramento do caso, porque elas podem vazar informação.
- Não colocamos comorbidades e manifestações hemorrágicas na base final por enquanto.

Sobre a classificação final:

```text
0 = descartado
1 = confirmado
```

Ela foi mantida porque ainda vamos usar para análise exploratória.

## Sobre alguns campos

`occupation_code` e `occupation_name` são basicamente a mesma informação. Um é o código CBO e o outro é o nome da ocupação.

`days_to_notification` é a diferença entre a data de notificação e a data dos primeiros sintomas:

```python
notification_date - symptom_onset_date
```

Essa coluna ficou bruta de propósito. Não foi aplicado limite nem correção de outliers. Isso é para conseguir ver os problemas da base depois.

Um exemplo: já apareceu valor muito alto em `days_to_notification`, então provavelmente tem data errada em alguns registros.

## Como rodar a limpeza

Instalar dependências básicas:

```powershell
py -3.11 -m pip install pandas pyarrow
```

Rodar a classe:

```powershell
py -3.11 -c "from notebooks_limpeza.dengue_data_cleaner import DengueDataCleaner; df = DengueDataCleaner().transformar(); print(df.shape)"
```

Também dá para abrir os notebooks e rodar por lá.

## Site

O site foi feito com React, TypeScript e Vite.

Rotas:

```text
/          página inicial
/triagem   formulário de triagem
/graphics  página de gráficos, ainda com placeholders
```

A triagem fica em `src/services/dengueRules.ts`.

Ela usa regras simples com os sintomas e dados do paciente. Dependendo do que for marcado, aparece baixa suspeita, suspeita moderada, alta suspeita, alerta ou dengue grave.

Ainda não é um modelo real. As porcentagens que aparecem na tela são simuladas.

## Como abrir o site

Instalar as dependências:

```powershell
npm install
```

Rodar:

```powershell
npm run dev
```

Depois abrir o endereço que aparecer no terminal, normalmente:

```text
http://localhost:5173
```

Para testar build:

```powershell
npm run build
```

## Próximos passos

- Ver melhor os outliers de `days_to_notification`.
- Colocar gráficos reais na página `/graphics`.
- Decidir melhor quais colunas ficam para análise.
- Depois pensar na parte de machine learning.
