import React from 'react';

const KuendaConfiavel = () => {
  return (
    <section className="confiavel">
      <div className="container">
        <h1 className="confiavel__titulo">A Kuenda é Confiável?</h1>
        <p className="confiavel__subtitulo">
          A segurança e a confiança são pilares fundamentais da nossa plataforma.
        </p>

        <div className="confiavel__secao">
          <h2>Compromisso com os usuários</h2>
          <p>
            Desde o início, a Kuenda tem como missão oferecer soluções reais, práticas e seguras para o transporte terrestre
            em Angola. Todas as nossas operações são realizadas com base em tecnologias modernas e práticas de segurança digital.
          </p>
        </div>

        <div className="confiavel__secao">
          <h2>O que garante a nossa confiabilidade?</h2>
          <ul className="confiavel__lista">
            <li>✔ Integração direta com transportadoras parceiras verificadas</li>
            <li>✔ Sistema seguro de pagamentos e emissão de bilhetes</li>
            <li>✔ Histórico de transações e encomendas acessível ao usuário</li>
            <li>✔ Monitoramento de bagagens e cargas em tempo real</li>
            <li>✔ Suporte ao cliente via WhatsApp, telefone e e-mail</li>
          </ul>
        </div>

        <div className="confiavel__secao">
          <h2>Feedback dos nossos usuários</h2>
          <p>
            Centenas de utilizadores já confiaram na Kuenda para as suas viagens e envios. A nossa comunidade cresce a cada dia com base na
            recomendação boca a boca e satisfação dos clientes.
          </p>
        </div>

        <div className="confiavel__secao confiavel__contato">
          <h2>Tem dúvidas?</h2>
          <p>
            Fale connosco a qualquer momento! A equipa Kuenda está sempre disponível para esclarecer qualquer questão e garantir uma boa experiência.
            Email de suporte: <strong>suporte@kuenda.co.ao</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KuendaConfiavel;
