import React from "react";
import btn1 from "../../images/iteration-2-images/icons/1.svg";
import btn2 from "../../images/iteration-2-images/icons/2.svg";
import btn3 from "../../images/iteration-2-images/icons/3.svg";
import btn4 from "../../images/iteration-2-images/icons/4.svg";
import btn5 from "../../images/iteration-2-images/icons/5.svg";
import btn6 from "../../images/iteration-2-images/icons/6.svg";
import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";
import { Link } from "react-router-dom";

import "./PizzaOrder.css";
function PizzaOrder() {
  return (
    <div>
      <main className="tasarım">
        <section className="tasarım-menu sol">
          <div className="menu-style">
            <h1>
              Özel <br />
              Lezzetus
            </h1>
            <p>Position:Absoulute Acı Buger</p>
            <Link to="/orderForm">
              <button className="btn-siparis">SİPARİŞ VER</button>
            </Link>
          </div>
        </section>

        <section className="tasarım-menu sag">
          <div className="hackhatlon-menu">
            <h2>
              Hackhatlon <br />
              Burger Menü
            </h2>
            <Link to="/orderForm">
              <button className="btn-siparis1">SİPARİŞ VER</button>
            </Link>
          </div>

          <div className="teslimat">
            <h2>
              <span style={{ color: "#CE2829" }}>çoooook</span> hızlı <br />
              npm gibi kurye
            </h2>
            <Link to="/orderForm">
              <button className="btn-siparis">SİPARİŞ VER</button>
            </Link>
          </div>
        </section>
      </main>

      <div className="tercih">
        <p>en çok paketlenen ürünler</p>
        <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
      </div>

      <section className="icons">
        <button className="btn1">
          <img src={btn1} alt="ramen" />
          Ramen
        </button>
        <button className="btn1">
          <img src={btn2} alt="pizza" />
          Pizza
        </button>
        <button className="btn1">
          <img src={btn3} alt="burger" />
          Burger
        </button>
        <button className="btn1">
          <img src={btn4} alt="fries" />
          French fries
        </button>
        <button className="btn1">
          <img src={btn5} alt="fast food" />
          Fast food
        </button>
        <button className="btn1">
          <img src={btn6} alt="drinks" />
          Soft drinks
        </button>
      </section>

      <main className="menu">
        <article className="menu-section">
          <div className="menu-container">
            <img src={food1} alt="food-1" />
            <div className="menu-content">
              <div className="menu-card">
                <h4>Terminal Pizza</h4>
                <div className="duzen">
                  <div className="point">
                    <p>4.9</p>
                  </div>
                  <div className="menu-item">
                    <p>(200)</p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>60₺</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="menu-section">
          <div className="menu-container">
            <img src={food2} alt="food-2" />
            <div className="menu-content">
              <div className="menu-card">
                <h4>Position Absolute Acı Biber</h4>
                <div className="duzen">
                  <div className="point">
                    <p>4.9</p>
                  </div>
                  <div className="menu-item">
                    <p>(200)</p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>60₺</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="menu-section">
          <div className="menu-container">
            <img src={food3} alt="food-3" />
            <div className="menu-content">
              <div className="menu-card">
                <h4>useEffect Tavuklu Burger</h4>
                <div className="duzen">
                  <div className="point">
                    <p>4.9</p>
                  </div>
                  <div className="menu-item">
                    <p>(200)</p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>60₺</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default PizzaOrder;
