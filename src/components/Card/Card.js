import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/dots.png";
import SideBar from "../SideBar/SideBar";

import "./Card.scss";
export default function Card() {
  return (
    <div className="card">
      <div className="card__main">
        <div className="card__soundtrack">
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/track/2YFtpiy2WoAQVQbM1SIwES?utm_source=generator&theme=0"
            width="250"
            height="112"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="card__content">
          <div className="card__title">
            <h1 className="podcast__name">Thanks Greg</h1>
            <h2 className="podcast__episode">Episode . serialkiller</h2>
          </div>

          <p className="podcast__description">
            blablablablaabalhkfejdgekrgjhkgrjgbv
          </p>
        </div>

        <div className="bottom">
          <div className="bottom__icons">
            <img className="bottom__icon" src={plus} />
            <img className="bottom__dots" src={dots} />
          </div>
          <p className="bottom__time">Sat . 1mn</p>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
