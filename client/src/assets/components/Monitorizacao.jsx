import React from 'react';

import construindoimg from "../image/construindoimg.png";

const Monitorizacao = () => {
  return (
    <div className="monitorizacao-container">
      {/* Zona Esquerda:  Imagem */}
      <div className="monitorizacao-left">
        <div className="monitorizacao-image">
          <img src={construindoimg} alt="Imagem ilustrativa" />
        </div>
      </div>

      {/* Zona Direita: Texto de Monitorização */}
      <div className="monitorizacao-right">
        <h2>Monitorização de Bagagens e Rotas</h2>
        <p>
          Agradecemos o seu interesse pelos nossos serviços.
          <strong> Informamos que esta funcionalidade ainda não está disponível</strong> nesta fase da nossa plataforma.
        </p>
        <p>
          A equipa técnica da <strong>Kuenda Transports</strong> encontra-se a trabalhar ativamente no desenvolvimento de um sistema integrado de 
          <em> monitorização em tempo real</em>, que permitirá o acompanhamento seguro e eficiente de bagagens e rotas em viagens interprovinciais.
        </p>
        <p>
          Este recurso será disponibilizado em breve, como parte do nosso compromisso com a inovação e a excelência no atendimento ao cliente.
        </p>
        <p>
          Agradecemos a sua compreensão.
        </p>
        <p className="monitorizacao-footer">
          Para mais informações, entre em contacto com a nossa equipa de suporte.
        </p>
      </div>
    </div>
  );
};

export default Monitorizacao;
