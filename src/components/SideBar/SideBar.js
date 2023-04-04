import sound from "../../assets/icons/sound.png";
import like from "../../assets/icons/like.png";
import dislike from "../../assets/icons/dislike.png";
import comment from "../../assets/icons/comment.png";
import share from "../../assets/icons/share.png";
import play from "../../assets/icons/play.png";
import save from "../../assets/icons/save.png";
import "./SideBar.scss";
import Comments from "../Comments/Comments";
// import { useState } from "react";

export default function SideBar({ commentModal, setCommentModal }) {
  // const [commentModal, setCommentModal] = useState(false)


  const openComments = () => {
    setCommentModal(true)
  }

  return (
    <>
      <div className="sidebar">
        <img className="sidebar__icon" src={sound} />
        <div className="sidebar__main">
          <div className="sidebar__nav">
            <img className="sidebar__icon" src={like} />
            <p className="label">34</p>
          </div>
          <div className="sidebar__nav">
            <img className="sidebar__icon" src={dislike} />
            <p className="label">34</p>
          </div>
          <div className="sidebar__nav">
            <img className="sidebar__icon" src={comment} onClick={openComments} />
            <p className="label">34</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <img className="sidebar__iconb" src={share} />

          <img className="sidebar__iconb" src={save} />

          <img className="sidebar__icon" src={play} />
        </div>
      </div>
    </>
  );
}

