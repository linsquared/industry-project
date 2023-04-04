import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/dots.png";
import SideBar from "../SideBar/SideBar";
import listen from "../../assets/images/listen.png";

import "./Card.scss";
export default function Card({ commentModal, setCommentModal, p }) {
  return (
    <div className="card">
      <div className="card__main">
        <div className="image__container">
          <img className="image" src={p.image} />
        </div>
        <div className="soundtrack">
          <div className="soundtrack__container"></div>
          <div className="soundtrack__container-small"></div>
          <iframe
            className="soundtrack__sound"
            src={p.audio_file}
            width="47%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          {/* <iframe
            src={p.audio_file}
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe> */}
        </div>

        <div className="card__content">
          <div className="card__title">
            <h1 className="podcast__name">{p.podcast_title}</h1>
            <h2 className="podcast__episode">By {p.podcast_name}</h2>
          </div>
        </div>
        <div className="podcast__description">{p.description}</div>

        <div className="bottom">
          <div className="bottom__icons">
            <img className="bottom__icon" src={plus} />
            <img className="bottom__dots" src={dots} />
          </div>
          <p className="bottom__time">Sat . {p.length}s</p>
        </div>
      </div>
      <SideBar commentModal={commentModal} setCommentModal={setCommentModal} />
    </div>
  );
}
