
import React from 'react';

import logofooterIcon from "../svg/busfill.svg";                    
import profilemainIcon from "../svg/profilemain.svg";
import ajudaIcon from "../svg/ajuda.svg";

const Footer = () => {
  return (
    <footer>
      {/* Parte azul do footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            
            {/* Logo e redes sociais */}
            <div className="footer-section logo-social">
              <a href="#"><img src={logofooterIcon} alt="Kuenda Logo" /></a>
              <div className="footer-links">
                <p><a href="#"><img src="../beta/img/icones/personwhite.svg" alt="" /> Minhas passagens</a></p>
                <p><a href="#"><img src="./img/icones/ajudawhite.svg" alt="" /> Ajuda</a></p>
              </div>
              <h4 className="nossas-redes">Nossas redes</h4>
              <div className="social-icons">
                <a href="#"><img src="./img/icones/igwhite.svg" alt="Instagram" /></a>
                <a href="#"><img src="./img/icones/xwhite.svg" alt="Twitter" /></a>
                <a href="#"><img src="./img/icones/fbwhite.svg" alt="Facebook" /></a>
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
                <a href="#"><img src="./img/icones/logo_multicaixa 1.svg" alt="Multicaixa" /></a>
                <a href="#"><img src="./img/icones/logo_multicaixa 2.svg" alt="Express" /></a>
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
