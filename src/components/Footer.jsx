import React from "react";
import "./Footer.css";

import logoFooter from "../../images/iteration-2-images/footer/logo-footer.svg";
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";

import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact">
            <div className="logo-footer">
              <img src={logoFooter} alt="logo-footer" />
            </div>
            <ul className="contact-info">
              <li>
                <img src={icon1} alt="" />
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </li>
              <li>
                <img src={icon2} alt="" />
                aciktim@teknolojikyemekler.com
              </li>
              <li>
                <img src={icon3} alt="" />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="footer-section menu">
            <h3>Hot Menu</h3>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position:Absolute Acı Burger</li>
            </ul>
          </div>
          <div className="footer-section instagram">
            <h3>Instagram</h3>
            <div className="insta-images">
              <ul>
                <li>
                  <img src={insta0} alt="" />
                </li>
                <li>
                  <img src={insta1} alt="" />
                </li>
                <li>
                  <img src={insta2} alt="" />
                </li>
                <li>
                  <img src={insta3} alt="" />
                </li>
                <li>
                  <img src={insta4} alt="" />
                </li>
                <li>
                  <img src={insta5} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Teknolojik Yemekler</p>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
