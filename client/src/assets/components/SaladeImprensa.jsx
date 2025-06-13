import React from 'react';


const SalaImprensa = () => {
  return (
    <section className="imprensa">
      <div className="container">
        <h1 className="imprensa__titulo">Sala de Imprensa</h1>
        <p className="imprensa__subtitulo">
          Acompanhe as novidades, comunicados e presença da Kuenda na mídia.
        </p>

        <div className="imprensa__secao">
          <h2>Últimos Comunicados</h2>
          <ul className="imprensa__lista">
            <li>
              <strong>[01/06/2025]</strong> — Kuenda lança nova funcionalidade de rastreio em tempo real para encomendas.
            </li>
            <li>
              <strong>[15/05/2025]</strong> — Parceria entre a Kuenda e transportadoras regionais do centro de Angola.
            </li>
            <li>
              <strong>[28/04/2025]</strong> — Plataforma ultrapassa 10.000 utilizadores registados no primeiro trimestre.
            </li>
          </ul>
        </div>

        <div className="imprensa__secao">
          <h2>Na Mídia</h2>
          <div className="imprensa__midia">
            <div className="card">
              <h3>TV Zimbo</h3>
              <p>
                “A Kuenda revoluciona o transporte rodoviário em Angola com uso da tecnologia.”
              </p>
            </div>
            <div className="card">
              <h3>Jornal de Angola</h3>
              <p>
                “Plataforma digital Kuenda aproxima passageiros e empresas de transporte com inovação.”
              </p>
            </div>
          </div>
        </div>

        <div className="imprensa__secao">
          <h2>Solicitações de Imprensa</h2>
          <p>
            Para entrevistas, parcerias institucionais ou matérias jornalísticas, entre em contacto através do nosso email oficial: <strong>imprensa@kuenda.co.ao</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalaImprensa;
