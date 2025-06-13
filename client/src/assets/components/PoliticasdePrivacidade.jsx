import React from 'react';


const PoliticasPrivacidade = () => {
  return (
    <section className="privacidade">
      <div className="container">
        <h1 className="privacidade__titulo">Políticas de Privacidade</h1>
        <p className="privacidade__subtitulo">
          A sua privacidade é uma prioridade para a Kuenda.
        </p>

        <div className="privacidade__secao">
          <h2>1. Coleta de Dados</h2>
          <p>
            Coletamos apenas os dados necessários para oferecer uma experiência segura e personalizada aos nossos utilizadores.
            Isso inclui nome, e-mail, número de telefone, dados de viagem, preferências e dados de pagamento.
          </p>
        </div>

        <div className="privacidade__secao">
          <h2>2. Uso das Informações</h2>
          <p>
            Utilizamos os dados para processar reservas, enviar notificações, melhorar o serviço e cumprir com obrigações legais.
            Nunca vendemos nem partilhamos informações pessoais com terceiros sem o seu consentimento.
          </p>
        </div>

        <div className="privacidade__secao">
          <h2>3. Segurança</h2>
          <p>
            Empregamos tecnologias modernas de segurança para proteger os dados armazenados, incluindo criptografia e protocolos seguros
            de pagamento.
          </p>
        </div>

        <div className="privacidade__secao">
          <h2>4. Acesso e Controle</h2>
          <p>
            Você tem o direito de solicitar acesso, correção ou exclusão de seus dados a qualquer momento. Para isso, envie uma solicitação para: 
            <strong> suporte@kuenda.co.ao </strong>.
          </p>
        </div>

        <div className="privacidade__secao">
          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua navegação. Você pode desativá-los nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades.
          </p>
        </div>

        <div className="privacidade__secao privacidade__final">
          <p>
            Ao utilizar a plataforma Kuenda, você concorda com os termos desta política. Esta página pode ser atualizada periodicamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticasPrivacidade;
