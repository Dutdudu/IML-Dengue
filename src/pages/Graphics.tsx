import { Link } from "react-router-dom";

function Graphics() {
  return (
    <main className="container">
      <section className="card">
        <h1>Análise dos Dados</h1>

        <p>
          Nesta página serão exibidas análises gráficas e textuais com insights
          obtidos ao longo do projeto. Os gráficos abaixo representam
          visualizações geradas a partir dos dados analisados.
        </p>

        <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
          <div
            style={{
              background: "#f3f3f3",
              padding: 16,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
  src={`${import.meta.env.BASE_URL}imagens/casos_por_mes.png`}
  alt="Casos por mês"
  style={{
    width: "100%",
    maxWidth: 700,
    borderRadius: 8,
  }}
/>
          </div>

          <div
            style={{
              background: "#f3f3f3",
              padding: 16,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
            }}
          >
           <img
  src={`${import.meta.env.BASE_URL}imagens/sintomas_confirmados_vs_descartados.png`}
  alt="Sintomas em casos confirmados e descartados"
  style={{
    width: "100%",
    maxWidth: 700,
    borderRadius: 8,
  }}
/>
          </div>

          <div
            style={{
              background: "#f3f3f3",
              padding: 16,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
  src={`${import.meta.env.BASE_URL}imagens/casos_confirmados_por_sexo.png`}
  alt="Casos confirmados por sexo"
  style={{
    width: "100%",
    maxWidth: 700,
    borderRadius: 8,
  }}
/>
          </div>
        </div>

        <section style={{ marginTop: 20 }}>
          <h2>Insights</h2>
          <ul>
            <li>Maio concentra 620 mil casos, o maior volume de todo o período. Abril (578 mil) e Março (396 mil) completam o pico do Outono, que responde por 60% das notificações anuais.
</li>
            <li>Tríade dominante: Febre (85.9%), cefaleia (80.2%) e mialgia (79.6%) passam de 79% nos confirmados, são quase universais e pouco discriminantes quando vistos isolados.
Exantema tem o maior gap relativo entre as classes: 25.4% nos confirmados vs 15.6% nos descartados (+63% relativo). Um dos sinais mais diferenciadores.</li>
            <li>A maior proporção feminina pode estar ligada à exposição doméstica. O Aedes aegypti se reproduz principalmente em reservatórios de água em casa, então quem passa mais tempo em casa fica mais exposto.
</li>
          </ul>
        </section>

        <div style={{ marginTop: 20 }}>
          <Link to="/" className="secondary">
            Voltar para Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Graphics;