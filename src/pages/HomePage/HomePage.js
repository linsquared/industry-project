import cross from "../../assets/icons/close.png";
import sound from "../../assets/icons/sound.png";
import like from "../../assets/icons/dots.png";
import dislike from "../../assets/icons/dislike.png";
import comment from "../../assets/icons/comment.png";
import share from "../../assets/icons/share.png";
import play from "../../assets/icons/play.png";
import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/plus.png";

import Button from "../../components/Button/Button";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div classname="homepage__nav">
        <img src={cross} className="homepage__cross" />
        <Button />
      </div>
    </div>
  );
}
