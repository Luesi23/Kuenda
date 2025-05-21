import React, { useState } from "react";
import Searchbox from "./Searchbox";


import huamboIcon from "../image/transportadoras/huambo000.png";

const Secondpage = () => {
  const [selectedClass, setSelectedClass] = useState("Conventional");

  const buses = Array(1).fill({
    departure: "08:10",
    duration: "05h10min",
    route: "Luanda-Gamek",
    destination: "Kuanza Sul-Sumbe",
    agency: "HUAMBO EXPRESSO",
    price: "8.500 AO",
    class: "Convencional"
  });

  return (
      <div className="main-content container">
        <div className="second-searchbox">
          < Searchbox />
        </div>
        <div className="bus-list">
          <p>205 passagens de ônibus encontradas</p>
          {/* Bilhetes */}
          {buses.map((bus, index) => (
            <div key={index} className="bus-card">
              <div>
                <p className="departure-time">Partida {bus.departure}</p>
                <p>{bus.duration}</p>
              </div>
              <div className="route-info">
                <p>{bus.route}</p>
                <p>{bus.destination}</p>
              </div>
              <div className="agency-info">
                <img src={huamboIcon} alt="Agência" />
              </div>
              <div className="price-select">
                <p className="price">{bus.price}</p>
                <p>{bus.class}</p>
                <button className="select-button">Selecionar</button>
              </div>
            </div>
          ))}
        </div>
        
          {/* Filtros */}
        <aside className="filters">
          <h4>Filtro</h4>
          <div>
            <p><strong>Horário de saída</strong></p>
            <label><input type="checkbox" /> Manhã</label><br />
            <label><input type="checkbox" /> Tarde</label><br />
            <label><input type="checkbox" /> Noite</label>
          </div>
          <div>
            <p><strong>Classes</strong></p>
            <label><input type="checkbox" checked={selectedClass === "Conventional"} onChange={() => setSelectedClass("Conventional")} /> Convencional</label><br />
            <label><input type="checkbox" /> Semi-executivo</label><br />
            <label><input type="checkbox" /> Executivo</label>
          </div>
          <div>
            <p><strong>Local de embarque</strong></p>
            <label><input type="checkbox" /> Camama</label><br />
            <label><input type="checkbox" /> Benfica</label><br />
            <label><input type="checkbox" /> Viana</label>
          </div>
          <div>
            <p><strong>Local de desembarque</strong></p>
            <label><input type="checkbox" /> Sumbe</label>
          </div>
          <div>
            <p><strong>Agências</strong></p>
            <label><input type="checkbox" /> Huambo Expresso</label><br />
            <label><input type="checkbox" /> Axel Express</label><br />
            <label><input type="checkbox" /> Ango Real</label><br />
            <label><input type="checkbox" /> Gira</label>
          </div>
        </aside>
      </div>
  );
};

export default Secondpage;

