import React from 'react';

const TrabalheConnosco = () => {
  return (
    <section className="trabalhe">
      <div className="container">
        <h1 className="trabalhe__titulo">Trabalhe Connosco</h1>
        <p className="trabalhe__subtitulo">
          Faça parte da transformação do transporte terrestre em Angola.
        </p>

        <div className="trabalhe__secao">
          <h2>Por que trabalhar na Kuenda?</h2>
          <p>
            Somos uma startup inovadora que utiliza a tecnologia para criar soluções reais no setor de transportes. 
            Aqui, valorizamos o trabalho em equipe, a criatividade e o compromisso com o impacto social.
          </p>
        </div>

        <div className="trabalhe__beneficios">
          <h2>O que oferecemos</h2>
          <ul className="beneficios">
            <li>Ambiente colaborativo e dinâmico</li>
            <li>Projetos com impacto nacional</li>
            <li>Oportunidades de crescimento</li>
            <li>Flexibilidade e autonomia</li>
            <li>Equipa jovem e criativa</li>
          </ul>
        </div>

        <div className="trabalhe__secao">
          <h2>Áreas que estamos a recrutar</h2>
          <ul className="vagas">
            <li>Desenvolvimento Web (Front e Back-end)</li>
            <li>UX/UI Design</li>
            <li>Gestão de Produto</li>
            <li>Marketing Digital</li>
            <li>Suporte ao Cliente</li>
          </ul>
        </div>

        <div className="trabalhe__secao">
          <h2>Como candidatar-se?</h2>
          <p>
            Envie-nos o seu CV e portfólio para o nosso email oficial: <strong>recrutamento@kuenda.co.ao</strong> ou 
            entre em contacto connosco através das redes sociais da plataforma. Estamos à procura de talentos que acreditam 
            em fazer a diferença!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConnosco;
