import sound from "../../assets/icons/sound.png";
import like from "../../assets/icons/like.png";
import dislike from "../../assets/icons/dislike.png";
import comment from "../../assets/icons/comment.png";
import share from "../../assets/icons/share.png";
import save from "../../assets/icons/save.png";
import { useState } from "react";
import "./SideBar.scss";

export default function SideBar({ setCommentModal, p, shareModal, setShareModal, setCardId }) {
  const [liking, setLiking] = useState(p.likes);
  const [disliking, setDiskling] = useState(p.dislikes);

  const openComments = () => {
    setCommentModal(true);
  };

  const openShare = (e, id) => {
    setShareModal(true)
    setCardId(id);
  };

  const clickLikes = (id) => {
    setLiking(liking + 1);
    const newLikes = p.likes++;
    console.log(newLikes);
  };

  const clickDislikes = (id) => {
    setDiskling(disliking - 1);
    const newDislikes = p.dislikes--;
  };

  return (
    <>
      <div className="sidebar">
        <img className="sidebar__icon" alt="icon sound" src={sound} />
        <div className="sidebar__main">
          <div className="sidebar__nav">
            <img
              onClick={clickLikes}
              className="sidebar__icon"
              alt="icon like"
              src={like}
            />
            <p className="label">{p.likes}</p>
          </div>
          <div className="sidebar__nav">
            <img
              onClick={clickDislikes}
              className="sidebar__icon"
              alt="icon dislike"
              src={dislike}
            />
            <p className="label">{p.dislikes}</p>
          </div>
          <div className="sidebar__nav">
            <img
              className="sidebar__icon"
              src={comment}
              onClick={openComments}
              alt="comment icon"
            />
            <p className="label">{p.comments}</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <img
            onClick={(e) => openShare(e, p.id)}
            className="sidebar__iconb"
            alt="share icon"
            src={share}
          />
          <img className="sidebar__iconb" alt="save icon" src={save} />
        </div>
      </div>
    </>
  );
}
