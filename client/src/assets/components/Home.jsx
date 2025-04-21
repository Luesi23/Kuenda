import React, { useState, useEffect } from 'react';


import busImage from "../image/AUTOCARRO.png";

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/image/rectangle 1 (1).jpg",
    "/image/pexels-carlos-cesar-1203812-2767921.jpg",
    "/image/rectangle 1 (2).jpg",
    "/image/rectangle 1 (2).jpg",
    "/image/rectangle 1 (2).jpg",
    "/image/rectangle 1 (2).jpg",
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
          Descubra os segredos de <span>Angola!</span>
        </h1>
        <img src={busImage} alt="Ônibus da Kuenda" className="hero-image" />
      </div>
    </section>
  );
};

export default Home;
