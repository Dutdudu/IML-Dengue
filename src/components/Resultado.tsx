type ModelResult = {
  name: string;
  result: string;
  probability: number;
};

type ResultadoProps = {
  title: string;
  message: string;
  level: string;
  models: {
    clinical: ModelResult;
    epidemiological: ModelResult;
  };
};

function Resultado({ title, message, level, models }: ResultadoProps) {
  const averageProbability = Math.round(
    (models.clinical.probability + models.epidemiological.probability) / 2
  );

  return (
    <div className={`resultado resultado-${level.toLowerCase()}`}>
      <h2>{title}</h2>

      <p>{message}</p>

      <div className="probability-container">
        <div className="probability-card">
          <h3>Modelo 1</h3>
          <strong>{models.clinical.probability}%</strong>
          <span>Probabilidade estimada</span>
        </div>

        <div className="probability-card">
          <h3>Modelo 2</h3>
          <strong>{models.epidemiological.probability}%</strong>
          <span>Probabilidade estimada</span>
        </div>
      </div>

      <div className="probability-average">
        <h3>Resultado final</h3>
        <strong>{averageProbability}%</strong>
        <p>Probabilidade média estimada de dengue</p>
      </div>

      <small>
        Esta triagem é apenas informativa e não substitui avaliação médica,
        exames laboratoriais ou atendimento em unidade de saúde.
      </small>
    </div>
  );
}

export default Resultado;