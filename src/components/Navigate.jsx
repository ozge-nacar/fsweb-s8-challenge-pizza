import React from "react";
import kore from "../../images/iteration-2-images/icons/1.svg";
import pizza from "../../images/iteration-2-images/icons/2.svg";
import burger from "../../images/iteration-2-images/icons/3.svg";
import kizartmalar from "../../images/iteration-2-images/icons/4.svg";
import fastFood from "../../images/iteration-2-images/icons/5.svg";
import gazli from "../../images/iteration-2-images/icons/6.svg";
import "./Navigate.css";
function Navigate() {
  return (
    <div>
      <nav className="menu-icon">
        <ul className="secenekler">
          <li>
            <img src={kore} />
            YENİ! Kore
          </li>
          <li>
            <img src={pizza} />
            Pizza
          </li>
          <li>
            <img src={burger} />
            Burger
          </li>
          <li>
            <img src={kizartmalar} />
            Kızartmalar
          </li>
          <li>
            <img src={fastFood} />
            Fast foot
          </li>
          <li>
            <img src={gazli} />
            Gazlı İçecek
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigate;
