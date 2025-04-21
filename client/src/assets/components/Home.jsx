import React, { useState, useEffect } from 'react';




const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '../beta/img/imagens/AUTOCARRO.png',
    '../beta/img/imagens/rectangle 1 (1).jpg',
    '../beta/img/imagens/image.jpg',
    '../beta/img/imagens/image.jpg',
    '../beta/img/imagens/image.jpg',
    '../beta/img/imagens/image.jpg',
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
        <img src="../beta/img/imagens/AUTOCARRO.png" alt="Ônibus da Kuenda" className="hero-image" />
      </div>
    </section>
  );
};

export default Home;
