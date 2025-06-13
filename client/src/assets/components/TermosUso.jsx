import React from 'react';

const TermosUso = () => {
  return (
    <section className="termos">
      <div className="container">
        <h1 className="termos__titulo">Termos de Uso</h1>
        <p className="termos__subtitulo">
          Leia com atenção os termos que regem a utilização da plataforma Kuenda.
        </p>

        <div className="termos__secao">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao aceder e utilizar a plataforma Kuenda, o utilizador concorda com os presentes Termos de Uso e com a Política de Privacidade. 
            Caso não concorde com algum dos termos, recomendamos que não utilize a plataforma.
          </p>
        </div>

        <div className="termos__secao">
          <h2>2. Cadastro e Responsabilidades</h2>
          <p>
            O utilizador é responsável por fornecer informações verdadeiras no momento do registo e por manter a confidencialidade de suas credenciais.
            É proibida qualquer tentativa de acesso não autorizado à conta de terceiros.
          </p>
        </div>

        <div className="termos__secao">
          <h2>3. Uso da Plataforma</h2>
          <p>
            A Kuenda oferece serviços de compra de passagens, monitoramento de bagagens e gestão de viagens. O uso deve ser feito de forma legal, ética e respeitosa.
            É proibido o uso para fins ilícitos ou fraudulentos.
          </p>
        </div>

        <div className="termos__secao">
          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo da plataforma (design, textos, imagens, logotipo, código) é propriedade da Kuenda ou de seus parceiros licenciados, sendo vedada qualquer reprodução
            sem autorização prévia.
          </p>
        </div>

        <div className="termos__secao">
          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            A Kuenda não se responsabiliza por atrasos ou falhas nas transportadoras parceiras, mas atua como intermediadora para facilitar e garantir suporte na resolução de problemas.
          </p>
        </div>

        <div className="termos__secao termos__final">
          <p>
            A Kuenda reserva-se o direito de alterar estes termos a qualquer momento. Recomendamos que os utilizadores consultem esta página periodicamente.
            Para dúvidas, contacte: <strong>suporte@kuenda.co.ao</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermosUso;
