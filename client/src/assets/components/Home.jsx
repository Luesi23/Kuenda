import React, { useState, useEffect } from 'react';
import '../css/sass/_home.scss';

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '../img/imagens/image1.jpg',
    './img/imagens/image2.jpg',
    './img/imagens/image3.jpg',
    './img/imagens/image4.jpg',
    './img/imagens/image5.jpg',
    './img/imagens/image6.jpg',
  ];

  const showImage = (i) => {
    if (i >= images.length) setIndex(0);
    if (i < 0) setIndex(images.length - 1);
  };

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
    <section className="hero">
      <div className="carousel" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt={`Imagem ${idx + 1}`} />
        ))}
      </div>
      <div className="overlay"></div>
      <button className="carousel-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextImage}>
        &#10095;
      </button>
      <div className="container">
        <h1>
          Descubra os segredos de <span>Angola</span>!
        </h1>
        <img src="./img/imagens/AUTOCARRO.png" alt="Ônibus da Kuenda" className="hero-image" />
      </div>
    </section>
  );
};

export default Home;
