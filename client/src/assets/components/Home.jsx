import React, { useState, useEffect } from 'react';

// import images for the carousel
import image1 from "../image/Rectangle 1 (1).jpg";
import image2 from "../image/pexels-carlos-cesar-1203812-2767921.jpg";
import image3 from "../image/field-covered-grass-trees-surrounded-by-zebras-sunlight-sunset.jpg";
import image4 from "../image/view-wild-rhino-animal-its-natural-habitat.jpg";
import image5 from "../image/wonderful-sunrise-august-morning-durdle-door-dorset-england.jpg";

import busImage from "../image/AUTOCARRO.png";

//import icons for .search-container
import partidaIcon from "../svg/partidap.svg";
import destinoIcon from "../svg/destinop.svg";
import dataIcon from "../svg/data.svg";
import lupaIcon from "../svg/pesquisap.svg";


const Home = () => {
  const [index, setIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
    <main className="hero">
      {/* Carrossel de Imagens */}
      <div
        className="carousel"
        style={{
          transform: `translateX(-${index * 100}vw)`,
          width: `${images.length * 100}vw`,
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="carousel-slide"
            style={{
              width: "100vw",
              height: "100%",
              flexShrink: 0,
            }}
          >
            <img src={image} alt={`Imagem ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Camada de Sobreposição */}
      <div className="overlay"></div>

      {/* Botões de navegação */}
      <button className="carousel-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextImage}>
        &#10095;
      </button>

      {/* Texto e imagem da campanha */}
      <div className="container">
        <h1>
          Descubra os segredos de <span>Angola!</span>
        </h1>
        <img src={busImage} alt="Ônibus da Kuenda" className="hero-image" />
      </div>

    {/* Bloco da barra de pesquisa */}
    <div className="container-geral">

      <div className="search-container">
        <div className="input-box">
          <span className="icon">
            <img src={partidaIcon} alt="Ícone Partida" />
          </span>
          <input type="text" placeholder="Partida" />
        </div>

        <div className="input-box">
          <span className="icon">
            <img src={destinoIcon} alt="Ícone Destino" />
          </span>
          <input type="text" placeholder="Destino" />
        </div>

        <div className="input-box">
          <span className="icon">
            <img src={dataIcon} alt="Ícone Data" />
          </span>
          <input type="date" defaultValue="2025-01-01" />
        </div>

          <button className="search-button">
            <span>
              <img src={lupaIcon} alt="Ícone Pesquisar" />
            </span>
            Encontrar
          </button>
      </div>
  </div>
    </main>
    
    {/* Bloco publicitario */}
    <div className="viagem-container">
      <div className="texto-sobreposto">
        <img src="./img/icones/autocarro-icon.svg" alt="Ícone" />
        Escolha de onde e para onde, e vamos viajar!
      </div>
      <div className="caixa-imagem">
        <img src="./img/pexels-carlos-cesar-1203812-2767921.jpg" alt="Imagem Exemplo" />
      </div>
    </div>

</div>
  );
};

export default Home;
