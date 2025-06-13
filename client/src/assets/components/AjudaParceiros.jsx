import React from 'react';

const AjudaParceiros = () => {
  return (
    <section className="ajuda">
      <div className="container">
        <h1 className="ajuda__titulo">Ajuda aos Parceiros</h1>
        <p className="ajuda__subtitulo">
          Suporte e orientações para as transportadoras que trabalham connosco.
        </p>

        <div className="ajuda__secao">
          <h2>Como se tornar parceiro da Kuenda?</h2>
          <p>
            Se és uma transportadora e pretendes integrar a plataforma Kuenda, entra em contacto através do e-mail: 
            <strong> parceiros@kuenda.co.ao </strong>. Após a análise da documentação, a nossa equipa dará seguimento ao processo de integração.
          </p>
        </div>

        <div className="ajuda__secao">
          <h2>Funcionalidades disponíveis para os parceiros</h2>
          <ul className="ajuda__lista">
            <li>✔ Acesso ao dashboard de vendas e relatórios</li>
            <li>✔ Gestão de horários e rotas de viagens</li>
            <li>✔ Emissão automática de bilhetes</li>
            <li>✔ Monitoramento de cargas e encomendas</li>
            <li>✔ Suporte técnico contínuo</li>
          </ul>
        </div>

        <div className="ajuda__secao">
          <h2>Problemas técnicos ou dúvidas?</h2>
          <p>
            A equipa Kuenda está disponível para dar assistência através de:
          </p>
          <ul className="ajuda__contato">
            <li><strong>Email:</strong> suporte@kuenda.co.ao</li>
            <li><strong>WhatsApp:</strong> +244 999 000 111</li>
            <li><strong>Telefone:</strong> 923 456 789</li>
          </ul>
        </div>

        <div className="ajuda__secao ajuda__final">
          <p>
            Estamos comprometidos em oferecer uma experiência eficiente, transparente e segura para todas as transportadoras parceiras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AjudaParceiros;
