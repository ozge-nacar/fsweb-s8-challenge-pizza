import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-img">
          <img
            src="/images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler"
            className="logo-img"
          />
        </Link>
        <nav className="breadcrumb">
          <Link to="/">Anasayfa</Link> <span> - </span>{" "}
          <Link to="/success">Sipariş Oluştur</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
