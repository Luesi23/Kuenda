import React, { useState, useEffect } from 'react';

import logo from "../svg/LOGO.svg";
import Searchbox from './Searchbox';

const Secondpage = () => {
    return (
        <div>
            
            <Searchbox />
            
            <h1>SEGUNDA PAGINA</h1>
            <img src={logo} alt="" />
        </div>

    );
};

export default Secondpage;
