import React from 'react';
import { Link } from 'react-router-dom';


export default function AcessoNegado() {
 
    return (
      <div className="acesso-negado">
        <h2>Acesso negado</h2>
        <p>Esta área é restrita apenas a Pessoal autorizado.</p>
       <Link to="/"> <p className='back-h'>Voltar na página Inicial</p> </Link>
      </div>
    );
  }