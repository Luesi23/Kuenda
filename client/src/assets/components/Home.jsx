import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


// import images for the carousel
import image1 from "../image/Rectangle 1 (1).jpg";
import image2 from "../image/pexels-carlos-cesar-1203812-2767921.jpg";
import image3 from "../image/field-covered-grass-trees-surrounded-by-zebras-sunlight-sunset.jpg";
import image4 from "../image/view-wild-rhino-animal-its-natural-habitat.jpg";
import image5 from "../image/paisagens/benguelagallary01.jpeg";

import busImage from "../image/AUTOCARRO.png";

//import icons and images for {bloco publicitario}
import autocarroIcon from "../svg/autocarro.svg";
import imagemPublicitaria from "../image/MAINPB.jpg";
import Searchbox from './Searchbox';


import lubangoImg from "../image/paisagens/lubango_autidor.webp";
import benguelaImg from "../image/paisagens/benguelagallary.jpeg";
import huamboimg from "../image/paisagens/moco004.jpg";
import desertoimg from "../image/paisagens/deserto-do-namibe.jpg.webp"


import lobitoimg from "../image/paisagens/restinga02.jpg";
import namibedesertoimg0 from "../image/paisagens/namibedesert00.jpg";

import luandaimg01 from "../image/paisagens/ilhadeluanda.jpg";

import luandaimg02 from "../image/paisagens/luanda01.jpeg";

import luandaimg03 from "../image/paisagens/palaciodeferro.jpg";
import luandaimg04 from "../image/paisagens/Igreja_de_Nossa_Senhora_dos_Remédios_(19929834976).jpg";
import uigeImg from "../image/paisagens/uige8.jpg";
import calandulaImg from "../image/paisagens/quedas-de-kalandula-00.jpg";
import luandaimg05 from "../image/paisagens/luandasaomigel.jpg";



//logos das transportadoras

import maconIcon from "../image/transportadoras/LOGO-MACON.png";
import angorealIcon from "../image/transportadoras/angoreal.png";
import cidralhaIcon from "../image/transportadoras/cidralha.jpeg";
import giraIcon from "../image/transportadoras/gira01.jpg";
import huamboIcon from "../image/transportadoras/huambo000.png";
import realexpressIcon from "../image/transportadoras/realexpress.png";




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

  // Função para adicionar a classe "visible" quando o elemento entra na viewport
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      <button className="carousel-btn prev" onClick={prevImage} aria-label="Imagem anterior">
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextImage} aria-label="Próxima imagem">
        &#10095;
      </button>

      

      

      {/* Texto e imagem da campanha */}
      <div className="container container-hero">
        <h1>
          Descubra os segredos de <span>Angola</span>!
        </h1>
        <img src={busImage} alt="Ônibus da Kuenda" className="hero-image" />
      </div>
    </main>
<Searchbox />

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

              <div className="viagem-item hidden-on-scroll">
                <div className="image-box">
                  <img src={benguelaImg}  alt="Província de Benguela" />
                  <div className="rectangle">
                    <p>A partir de <span>6.000kzs</span></p>
                  </div>
                </div>
               
                <h4 className="route-text">Luanda - Benguela</h4>
                <p className="description-text">Relaxe nas incríveis praias da Baía Azul e Morena. Litoral deslumbrante, ideal para fugir da rotina.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={lubangoImg} alt="Província do Lubango" /> 
                  <div className="rectangle">
                    <p>A partir de <span>12.000kzs</span></p>
                  </div>
                </div>
               
                <h4 className="route-text">Luanda - Lubango</h4>
                <p className="description-text">Visite o Cristo Rei e aprecie vistas únicas do planalto. Cultura e paisagens num só destino.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={huamboimg}  alt="Moro do Môco" />
                  <div className="rectangle">
                    <p>A partir de <span>8.000kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Benguela - Huambo</h4>
                <p className="description-text">Chegue ao topo de Angola no Morro do Môco. Natureza, aventura e altitude pura.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>
          
              <div className="viagem-item">
                <div className="image-box">
                  <img src={namibedesertoimg0} alt="Deserto do Namibe" /> 
                  <div className="rectangle">
                    <p>A partir de <span>27.000kzs</span></p>
                  </div>
                </div>
               
                <h4 className="route-text">Luanda - Namibe</h4>
                <p className="description-text">Explore o deserto mais antigo do mundo, <br />com suas dunas douradas e beleza intocada.
                Reserve sua próxima aventura no sul de Angola com a Kuenda – simples, rápido e seguro.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={luandaimg01} alt="Ilha de Luanda" />
                  <div className="rectangle">
                    <p>A partir de <span>8.500kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Sumbe - Luanda</h4>
                <p className="description-text">Sol, mar e gastronomia num dos pontos mais vibrantes da capital.
                Garanta seu bilhete com a Kuenda e chegue com tranquilidade à Ilha.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={luandaimg02} alt="Descrição da Segunda Imagem" />
                  <div className="rectangle">
                    <p>A partir de <span>27.000kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Namibe - Luanda</h4>
                <p className="description-text">Da arte urbana ao semba noturno — Luanda nunca dorme!
                Viaje com conforto usando a Kuenda e viva a cidade ao máximo.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={luandaimg03} alt="Descrição da Segunda Imagem" />
                  <div className="rectangle">
                    <p>A partir de <span>13.000kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Benguela - Luanda</h4>
                <p className="description-text">A capital angolana guarda contrastes, memórias e novos caminhos.
                Compre sua passagem terrestre pela Kuenda e redescubra Luanda de forma prática.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={luandaimg04} alt="Igreja Nossa Senhora dos Remédios, Luanda" />
                  <div className="rectangle">
                    <p>A partir de <span>8.500kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Malanje - Luanda</h4>
                <p className="description-text">História, fé e uma vista incrível da baía de Luanda.
                Reserve já na Kuenda e descubra esse tesouro da capital!</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={uigeImg} alt="Gruta do Zenzo, Uíge" />
                  <div className="rectangle">
                    <p>A partir de <span>8.000kzs</span></p>
                  </div>
                </div>

                <h4 className="route-text">Luanda - Uíge</h4>
                <p className="description-text">Descubra a rota do café e as tradições do norte profundo.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={calandulaImg} alt="Quedas de Kalandula, Província do Malanje" />
                  <div className="rectangle">
                    <p>A partir de <span>8.500kzs</span></p>
                  </div>
                </div>

                <h4 className="route-text">Luanda - Malanje</h4>
                <p className="description-text">Sinta o poder das maiores quedas d’água do país num cenário natural único.
                A Kuenda conecta você às melhores rotas para Malanje com total conveniência.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={luandaimg05} alt="Fortaleza de São Miguel, cidade de Luanda" />
                  <div className="rectangle">
                    <p>A partir de <span>15.500kzs</span></p>
                  </div>
                </div>


                <h4 className="route-text">Kuíto - Luanda</h4>
                <p className="description-text">Mistérios, história e vistas de tirar o fôlego no berço de Angola.
                Com a Kuenda, planeie sua visita com apenas alguns cliques.</p>
                <div className="button">
                  <p>COMPRAR</p>
                </div>
              </div>

              <div className="viagem-item">
                <div className="image-box">
                  <img src={lobitoimg} alt="Ponta da Restinga, Lobito" />
                  <div className="rectangle">
                    <p>A partir de <span>13.000kzs</span></p>
                  </div>
                </div>
                
                <h4 className="route-text">Luanda - Lobito</h4>
                <p className="description-text">Beleza costeira e vida urbana lado a lado num passeio inesquecível.
                Compre sua passagem com a Kuenda e explore o Lobito com liberdade.</p>
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
          <img src={desertoimg} alt="Outra imagem" />
        </div>
      </div>
    </div>


    <div className="container container-sec3">
  <div className="full-width-section">
    <div className="agencias">
      <h2 className="responsive-title">Compre passagem das seguintes Agências</h2>
      <div className="logos-container">

        <div className="logo-group">
          <div className="logo-item">
            <img src={maconIcon} alt="Macon" />
          </div>

          <div className="logo-item">
            <img src={huamboIcon} alt="Huambo Express" />
          </div>

          <div className="logo-item">
            <img src={cidralhaIcon} alt="Cidralha" />
          </div>

          <div className="logo-item">
            <img src={realexpressIcon} alt="Real Express" />
          </div>
       
          <div className="logo-item">
            <img src={giraIcon} alt="Gira" />
          </div>

          <div className="logo-item">
            <img src={angorealIcon} alt="Ango-Real" />
          </div>
        </div>

        </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Home;
