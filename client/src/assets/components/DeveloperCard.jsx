import React from 'react';

const DeveloperCard = () => {
  return (
    <section className="container developer-section">
      <div className="developer-container">
        {/* Danivaldo - Top Left */}
        <div className="developer-card danivaldo">
          <div className="developer-image">
            <div className="circle-background blue"></div>
            <img src="https://via.placeholder.com/300" alt="Danivaldo Chiteia" />
          </div>
          <div className="developer-info">
            <h2>Danivaldo Chiteia</h2>
            <p className="title">Técnico Informático - Full Stack Developer</p>
            
            <div className="skills">
              <h3>Especialidades</h3>
              <div className="skills-list">
                <span>Design Gráfico</span>
                <span>Web Design</span>
                <span>Front-end</span>
                <span>Back-end</span>
                <span>ReactJS</span>
                <span>Sass</span>
                <span>Node.js</span>
                <span>Express</span>
              </div>
            </div>
            
            <div className="qualities">
              <h3>Qualidades</h3>
              <ul>
                <li>Espírito de equipe</li>
                <li>Organização</li>
                <li>Capacidade de transformar ideias</li>
                <li>Comunicação eficaz</li>
                <li>Criatividade e foco na qualidade</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Manuel - Bottom Right */}
        <div className="developer-card manuel">
          <div className="developer-image">
            <div className="circle-background yellow"></div>
            <img src="https://via.placeholder.com/300" alt="Manuel Domingos" />
          </div>
          <div className="developer-info">
            <h2>Manuel André Domingos</h2>
            <p className="title">Técnico Informático - Full Stack Developer</p>
            
            <div className="skills">
              <h3>Especialidades</h3>
              <div className="skills-list">
                <span>Web Design</span>
                <span>Front-end</span>
                <span>Back-end</span>
                <span>ReactJS</span>
                <span>Sass</span>
                <span>Node.js</span>
                <span>Express</span>
              </div>
            </div>
            
            <div className="qualities">
              <h3>Qualidades</h3>
              <ul>
                <li>Espírito de equipe</li>
                <li>Organização</li>
                <li>Capacidade de transformar ideias</li>
                <li>Comunicação eficaz</li>
                <li>Criatividade e foco na qualidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCard;