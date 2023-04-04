import sound from "../../assets/icons/sound.png";
import like from "../../assets/icons/dots.png";
import dislike from "../../assets/icons/dislike.png";
import comment from "../../assets/icons/comment.png";
import share from "../../assets/icons/share.png";
import play from "../../assets/icons/play.png";
import save from "../../assets/icons/save.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__icon" src={sound} />
      <div className="sidebar__main">
        <div className="sidebar__nav">
          <img className="sidebar__icon" src={like} />
          <p className="side__number">34</p>
        </div>
        <div className="sidebar__nav">
          <img className="sidebar__icon" src={dislike} />
          <p className="side__number">34</p>
        </div>
        <div className="sidebar__nav">
          <img className="sidebar__icon" src={comment} />
          <p className="side__number">34</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <img className="sidebar__icon" src={share} />

        <img className="sidebar__icon" src={save} />

        <img className="sidebar__icon" src={play} />
      </div>
    </div>
  );
}
