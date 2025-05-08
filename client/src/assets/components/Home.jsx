import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


// import images for the carousel
import image1 from "../image/Rectangle 1 (1).jpg";
import image2 from "../image/pexels-carlos-cesar-1203812-2767921.jpg";
import image3 from "../image/field-covered-grass-trees-surrounded-by-zebras-sunlight-sunset.jpg";
import image4 from "../image/view-wild-rhino-animal-its-natural-habitat.jpg";
import image5 from "../image/wonderful-sunrise-august-morning-durdle-door-dorset-england.jpg";

import busImage from "../image/AUTOCARRO.png";

//import icons and images for {bloco publicitario}
import autocarroIcon from "../svg/autocarro.svg";
import imagemPublicitaria from "../image/MAINPB.jpg";
import Searchbox from './Searchbox';





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

        {images.length > 0 &&
          images.map((image, idx) => (
            <div key={idx} className="carousel-slide">
              <img src={image} alt={`Imagem ${idx + 1}`} />
            </div>
        ))}

      </div>

      {/* Camada de Sobreposição */}
      <div className="overlay"></div>

      {/* Botões de navegação */}
      <button className="carousel-btn prev" onClick={prevImage} aria-label="Imagem anterior">
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextImage} aria-label="Próxima imagem">
        &#10095;
      </button>

      <Searchbox />

      <Searchbox />

      {/* Texto e imagem da campanha */}
      <div className="container container-hero">
        <h1>
          Descubra os segredos de <span>Angola</span>!
        </h1>
        <img src={busImage} alt="Ônibus da Kuenda" className="hero-image" />
      </div>
    </main>


        {/* Bloco publicitario */}
        <div className="container publicit-container ">
          <div className="texto-sobreposto">
            <img src={autocarroIcon} alt="Ícone de autocarro" />
            Escolha de onde e para onde, e vamos viajar!
          </div>
          <div className="caixa-imagem">
            <img src={imagemPublicitaria} alt="Imagem publicitaria" />
          </div>
        </div>



          {/* Seção de Viagens */}
        <div className="container viagens-container">
          <div className="section-title">Viagens mais feitas em Angola</div>

            <div className="row">
              <div className="viagem-item">
                <div className="image-box">
                  <img src={image2}  alt="Descrição da Imagem" />
                </div>
                <div className="rectangle">
                  <p>A partir de <span>6.000kzs</span></p>
                </div>
                <h4 className="route-text">Luanda - Benguela</h4>
                <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={image2} alt="Descrição da Segunda Imagem" />
                </div>
                <div className="rectangle">
                  <p>A partir de <span>12.000kzs</span></p>
                </div>
                <h4 className="route-text">Luanda - Lubango</h4>
                <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={image2}  alt="Descrição da Terceira Imagem" />
                </div>
                <div className="rectangle">
                  <p>A partir de <span>8.000kzs</span></p>
                </div>
                <h4 className="route-text">Huambo - Benguela</h4>
                <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>
          </div>
      </div>


      <div className="container">
      {/* Primeira linha: Texto à esquerda, Caixa à direita */}
      <div className="content-wrapper">
        <div>
          <p className="text-block">Monitorize suas Encomendas e Cargas</p>
          <p className="text-description">
            Através da nossa plataforma, você pode acompanhar o status de suas encomendas e cargas em tempo real.
          </p>
          <Link to="./monitorizacao" className="button">
            <div>
              <span className="button-text">Monitorar</span>
            </div>
          </Link>
        </div>
        <div className="box">
          <img src={image2}  alt="Imagem da encomenda" />
        </div>
      </div>

      {/* Segunda linha: Texto à direita, Caixa à esquerda */}
      <div className="content-wrapper reverse">
        <div>
          <p className="text-block">Conheça as maravilhas de Angola</p>
          <p className="text-description">
            Explore os destinos mais incríveis de Angola e viva experiências inesquecíveis.
          </p>
        </div>
        <div className="box">
          <img src={image2} alt="Outra imagem" />
        </div>
      </div>
    </div>



    <div className="container container-sec3">
      <div className="full-width-section">
        <div className="agencias">
          <h2>Compre passagem das seguintes Agências</h2>
          <div className="logos-container">
            <div className="logo">
              <img src={image2} alt="Logo 1" />
            </div>
            <div className="logo">
              <img src={image2}  alt="Logo 2" />
            </div>
            <div className="logo">
              <img src={image2}  alt="Logo 3" />
            </div>
            <div className="logo">
              <img src={image2}  alt="Logo 4" />
            </div>
            <div className="logo">
              <img src={image2}  alt="Logo 5" />
            </div>
            <div className="logo">
              <img src={image2}  alt="Logo 6" />
            </div>
          </div>
        </div>
      </div>
    </div>



</div>
  );
};

export default Home;
