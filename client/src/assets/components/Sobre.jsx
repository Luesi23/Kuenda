import React from 'react';


const Sobre = () => {
  return (
    <section className="sobre">
      <div className="container">
        <h1 className="sobre__titulo">Sobre a Kuenda</h1>
        <p className="sobre__subtitulo">
          Soluções inteligentes para o transporte terrestre em Angola.
        </p>

        <div className="sobre__secao">
          <h2>Quem Somos</h2>
          <p>
            A Kuenda é uma plataforma digital angolana que conecta passageiros e
            transportadoras terrestres. Oferecemos soluções modernas para a
            compra de bilhetes, gestão de viagens e monitoramento de encomendas
            em tempo real.
          </p>
        </div>

        <div className="sobre__missao-visao">
          <div className="card">
            <h3>Missão</h3>
            <p>
              Modernizar o setor de transporte terrestre, oferecendo conforto,
              organização e segurança aos passageiros e transportadoras.
            </p>
          </div>
          <div className="card">
            <h3>Visão</h3>
            <p>
              Ser a principal referência em soluções digitais de mobilidade
              terrestre em Angola e na África Austral.
            </p>
          </div>
        </div>

        <div className="sobre__secao">
          <h2>Valores</h2>
          <ul className="valores">
            <li>Transparência e responsabilidade</li>
            <li>Inovação com impacto social</li>
            <li>Facilidade de acesso e usabilidade</li>
            <li>Valorização da cultura angolana</li>
            <li>Compromisso com a inclusão digital</li>
          </ul>
        </div>

        <div className="sobre__secao">
          <h2>Como Surgiu a Kuenda</h2>
          <p>
            A Kuenda nasceu da observação direta dos desafios enfrentados por
            passageiros e transportadoras em Angola. Vimos a necessidade de
            transformar a experiência de viagem, trazendo mais organização,
            acesso digital e rastreabilidade. A nossa jornada começou com
            jovens desenvolvedores que decidiram usar a tecnologia como
            ferramenta para resolver problemas reais da sociedade.
          </p>
        </div>

        <div className="sobre__secao">
          <h2>Equipe</h2>
          <p>
            A Kuenda é desenvolvida por uma equipe jovem e comprometida com a
            inovação e o desenvolvimento sustentável de Angola. Liderado por{' '}
            <strong>Manuel Domingos</strong> e{' '}
            <strong>Danivaldo Chiteia</strong>, o time reúne competências em
            design, programação, experiência do usuário e visão de negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
