
import React from 'react';

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
        <div className="container flex-space-between">
          <div className="footer-content">
            
            {/* Logo e redes sociais */}
            <div className="footer-section logo-social">
              <a href="#"><img src={logofooterIcon} alt="Kuenda Logo" /></a>
              <div className="footer-links">
                <p><a href="#"><img src={passagensfooterIcon}  alt="" /> Minhas passagens</a></p>
                <p><a href="#"><img src={ajudafooterIcon}  alt="" /> Ajuda</a></p>
              </div>
              <h4 className="nossas-redes">Nossas redes</h4>
              <div className="social-icons">
                <a href="#"><img src={instagramIcon}  alt="Instagram" /></a>
                <a href="#"><img src={twitterIcon}  alt="Twitter" /></a>
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              </div>
            </div>

            {/* Informações */}
            <div className="footer-section info">
              <h4>Informações</h4>
              <div className="info-links">
                <div>
                  <p><a href="#">Quem Somos</a></p>
                  <p><a href="#">Trabalhe Conosco</a></p>
                  <p><a href="#">Área do Investidor</a></p>
                  <p><a href="#">Sala de Imprensa</a></p>
                </div>
                <div>
                  <p><a href="#">Kuenda é Confiável</a></p>
                  <p><a href="#">Política de Privacidade</a></p>
                  <p><a href="#">Termos de Uso</a></p>
                  <p><a href="#">Ajuda aos Parceiros</a></p>
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
