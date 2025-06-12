import React, { useState } from "react";
import Searchbox from "./Searchbox";
import ViagensList from "../Dashboard/ViagensList";

const Secondpage = () => {
  const [selectedClass, setSelectedClass] = useState("Conventional");

  return (
    <div className="main-content container">
      <div className="second-searchbox">
        <Searchbox />
      </div>

      <section className="body-secondpg">
        <p>Passagens de ônibus encontradas</p>

        <aside className="body-second">
          <div className="bus-list">
            <ViagensList />
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
              <label>
                <input
                  type="checkbox"
                  checked={selectedClass === "Conventional"}
                  onChange={() => setSelectedClass("Conventional")}
                /> Convencional
              </label><br />
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
        </aside>
      </section>
    </div>
  );
};

export default Secondpage;
