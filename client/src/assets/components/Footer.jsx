
import React from 'react';
import { Link } from 'react-router-dom';

import logofooterIcon from "../svg/logoft.svg";  

import passagensfooterIcon from "../svg/personwhite.svg"
import ajudafooterIcon from "../svg/ajudaft.svg"
import instagramIcon from "../svg/instagramft.svg";
import twitterIcon from "../svg/xft.svg";
import facebookIcon from "../svg/facebookft.svg";
import multicaixaIcon from "../svg/logo_multicaixa.svg";  
import expressIcon from "../svg/logo_multicaixaExpress.svg";

const Footer = () => {
  return (
    <footer>
      {/* Parte azul do footer */}
      <div className="footer-main">
        <div className="container-footer flex-space-between">
          <div className="footer-content">
            
            {/* Logo e redes sociais */}
            <div className="footer-section logo-social">
              <a href="#"><img src={logofooterIcon} alt="Kuenda Logo" /></a>
              <div className="footer-links">
                <p><link to ="#"><img src={passagensfooterIcon}  alt="" /> Minhas passagens</link></p>
                <p><link to ="#"><img src={ajudafooterIcon}  alt="" /> Ajuda</link></p>
              </div>
              <h4 className="nossas-redes">Nossas redes</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/luesi_23?igsh=OHJ2bzRhbGZwd3Ro"><img src={instagramIcon}  alt="Instagram" /></a>
                <a href="https://www.instagram.com/dano__chiteia?igsh=dXlzMnJxamZsMWt5"><img src={twitterIcon}  alt="Twitter" /></a>
                <a href="https://www.instagram.com/sixplu6?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={facebookIcon} alt="Facebook" /></a>
              </div>
            </div>


              {/* Informações */}
              <div className="footer-section info">
                <h4>Informações</h4>
                <div className="info-links">
                  <div>
                    <p><Link to="/Sobre">Quem Somos</Link></p>
                    <p><Link to="/trabalheconnosco">Trabalhe Conosco</Link></p>
                    <p><Link to="/areiainvestidor">Área do Investidor</Link></p>
                    <p><Link to="/saladeimprensa">Sala de Imprensa</Link></p>
                    <p><Link to="/developercard">A equipe de Desenvolvimento</Link></p>
                  </div>
                  <div>
                    <p><Link to="/kuendaconfiavel">Kuenda é Confiável</Link></p>
                    <p><Link to="/politicasdeprivacidade">Política de Privacidade</Link></p>
                    <p><Link to="/termosuso">Termos de Uso</Link></p>
                    <p><Link to="/ajudaparceiros">Ajuda aos Parceiros</Link></p>
                  </div>
                </div>
              </div>


            {/* Meios de pagamento */}
            <div className="footer-section payment">
              <h4>Meios de pagamento</h4>
              <div className="payment-methods">
                <a href="#"><img src={multicaixaIcon}  alt="Multicaixa" /></a>
                <a href="#"><img src={expressIcon}  alt="Express" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte inferior branca do footer */}
      <div className="footer-bottom">
        <p>Copyright © 2024 - Todos os direitos reservados a Kukala Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
