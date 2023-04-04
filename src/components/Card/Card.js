import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/dots.png";
import SideBar from "../SideBar/SideBar";

import "./Card.scss";
export default function Card() {
  return (
    <div className="card">
      <div className="card__main">
        <div className="card__soundtrack"></div>
        <div className="card__content">
          <div className="card__title">
            <h1 className="podcast__name">Thanks Greg</h1>
            <h2 className="podcast__episode">episode . serialkiller</h2>
          </div>

          <p className="podcast__description">
            blablablablaabalhkfejdgekrgjhkgrjgbv
          </p>
        </div>
        <div className="bottom">
          <div className="bottom__icons">
            <img className="bottom__icon" src={plus} />
            <img className="bottom__icon" src={dots} />
          </div>
          <p className="bottom__time">Sat . 1mn</p>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
