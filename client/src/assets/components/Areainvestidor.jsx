import React from 'react';

const Desenvolvedor = () => {
  return (
    <section className="dev">
      <div className="container">
        <h1 className="dev__titulo">Área do Desenvolvedor</h1>
        <p className="dev__subtitulo">
          Conecte-se à inovação da mobilidade terrestre em Angola.
        </p>

        <div className="dev__secao">
          <h2>Integrações com a Kuenda</h2>
          <p>
            Oferecemos APIs e documentação para programadores que desejam integrar serviços, automatizar processos ou criar soluções conectadas à nossa plataforma.
            Ideal para startups, desenvolvedores independentes e parceiros tecnológicos.
          </p>
        </div>

        <div className="dev__recursos">
          <h2>Recursos disponíveis</h2>
          <ul className="dev__lista">
            <li>API REST para reservas de bilhetes e gestão de viagens</li>
            <li>Documentação técnica atualizada</li>
            <li>Ambiente de testes (sandbox)</li>
            <li>Chaves de autenticação (token)</li>
            <li>Suporte técnico via Discord e Notion</li>
          </ul>
        </div>

        <div className="dev__secao">
          <h2>Quem pode usar?</h2>
          <p>
            Desenvolvedores, empresas parceiras e entusiastas da tecnologia que desejam construir soluções em conjunto com a Kuenda.
          </p>
        </div>

        <div className="dev__cta">
          <h2>Comece agora</h2>
          <p>
            Solicite acesso à documentação e tokens via e-mail: <strong>dev@kuenda.co.ao</strong>. Participe da revolução digital no setor de transportes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Desenvolvedor;
