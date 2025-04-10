import DashHeader from './DashHeader'
import empresa_bg_br from '../svg/empresa_bg_br.svg'
import React, { useEffect, useState } from "react";
import axios from 'axios'

const MainDash = () => {

    const [contadores, setContadores] = useState({
        users_cont: 0,
        empresas_cont: 0,
        agencias_cont: 0
    });

    // Função para buscar os contadores
    const fetchContadores = async () => {
        try {
            const res = await axios.get("http://localhost:8800/contadores");
            setContadores(res.data);
        } catch (error) {
            console.error("Erro ao buscar contadores:", error);
        }
    };

    // Buscar os contadores quando o componente carregar
    useEffect(() => {
        fetchContadores();
    }, []);

  return (
    <>

        <div className='Box-main border p-2'>
            <DashHeader/>
           <div className='flex mt-2'>
                <h1 className=' titulo_dash'>
                    VISÃO <br/> GERAL
                </h1>
                <div className='boxs'>
                    <div className=' broke-line mr-2'>
                            <div className='elements flex-center mx-1 mb-2'>
                                <div className='elemensts_value'>
                                    <img className='' src={empresa_bg_br} alt="" />
                                    <p>{contadores.empresas_cont} Empresas<br/>associadas</p>
                                </div>
                            </div>
                            <div className='elements flex-center mx-1 mb-2'>
                                <div className='elemensts_value'>
                                    <img className='' src={empresa_bg_br} alt="" />
                                    <p>{contadores.agencias_cont} Agencias</p>
                                </div>
                            </div>
                            <div className='elements flex-center mx-1 mb-2'>
                                <div className='elemensts_value'>
                                    <img className='' src={empresa_bg_br} alt="" />
                                    <p>{contadores.users_cont} Clientes</p>
                                </div>
                            </div>
                            <div className='elements flex-center mx-1 mb-2'>
                                <div className='elemensts_value'>
                                    <img className='' src={empresa_bg_br} alt="" />
                                    <p>7 empresas associados</p>
                                </div>
                            </div>
                            <div className='elements flex-center mx-1 mb-2'>
                                <div className='elemensts_value'>
                                    <img className='' src={empresa_bg_br} alt="" />
                                    <p>7 empresas associados</p>
                                </div>
                            </div>
                </div>
                    </div>   
            </div>
            <h5>Lista de Empresas</h5> 
            
        </div>
    </>
  )
}

export default MainDash