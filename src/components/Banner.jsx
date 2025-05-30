import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="Teknoloji Yemekler Logo" className="logo" />
        <div className="content">
          <p className="content-text">fırsatı kaçırma</p>
          <h1>
            KOD ACIKTIRIR <br />
            PIZZA, DOYURUR
          </h1>
          <Link to="/orderForm">
            <button className="button">Acıktım</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Banner;
