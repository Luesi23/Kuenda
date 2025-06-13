import DashHeader from './DashHeader';
import empresa_bg from '../svg/empresa_bg.svg';
import agencia_bg from '../svg/agencia_bg.svg';
import person_bg from '../svg/person_bg.svg';
import rotas_bg from '../svg/rotas_bg.svg';
import bilhetes_bg from '../svg/bilhetes_bg.svg';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const MainDash = () => {
  const [contadores, setContadores] = useState({
    users_cont: 0,
    empresas_cont: 0,
    agencias_cont: 0,
    viagens_cont: 0,
    bilhetes_cont: 0
  });

  const fetchContadores = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8800/contadores", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContadores(res.data);
    } catch (error) {
      console.error("Erro ao buscar contadores:", error);
    }
  };

  useEffect(() => {
    fetchContadores();
  }, []);

  return (
    <>
      <div>
        <DashHeader />
        <div className='flex mt-2'>
          <h1 className='titulo_dash'>
            VISÃO <br /> GERAL
          </h1>
          <div className='boxs'>
            <div className='broke-line mr-2'>
              <Link to='/dashboard/empresatableview'>
                <div className='elements flex-center mx-1 mb-2'>
                  <div className='elemensts_value'>
                    <img className='mb-1' src={empresa_bg} alt="" />
                    <p>{contadores.empresas_cont} Empresas<br />associadas</p>
                  </div>
                </div>
              </Link>

              <Link to='/dashboard/agenciatable'>
                <div className='elements flex-center mx-1 mb-2'>
                  <div className='elemensts_value'>
                    <img className='mb-1' src={agencia_bg} alt="" />
                    <p>{contadores.agencias_cont} Agências</p>
                  </div>
                </div>
              </Link>

              <Link to="/dashboard/usertableview">
                <div className='elements flex-center mx-1 mb-2'>
                  <div className='elemensts_value'>
                    <img className='mb-1' src={person_bg} alt="" />
                    <p>{contadores.users_cont} Clientes</p>
                  </div>
                </div>
              </Link>

              <Link to="/dashboard/viagens">
                <div className='elements flex-center mx-1 mb-2'>
                  <div className='elemensts_value'>
                    <img className='mb-1' src={rotas_bg} alt="" />
                    <p>{contadores.viagens_cont} Viagens</p>
                  </div>
                </div>
              </Link>

              <div className='elements flex-center mx-1 mb-2'>
                <div className='elemensts_value'>
                  <img className='mb-1' src={bilhetes_bg} alt="" />
                  <p>{contadores.bilhetes_cont} Vendas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDash;
