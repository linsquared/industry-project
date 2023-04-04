import sound from "../../assets/icons/sound.png";
import like from "../../assets/icons/like.png";
import dislike from "../../assets/icons/dislike.png";
import comment from "../../assets/icons/comment.png";
import share from "../../assets/icons/share.png";
import save from "../../assets/icons/save.png";
import { useState } from "react";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
export default function SideBar({ commentModal, setCommentModal, shareModal, setShareModal }) {
  // const [commentModal, setCommentModal] = useState(false)
  const [liking, setLiking] = useState(p.likes);
  const [disliking, setDiskling] = useState(p.dislikes);

  const openComments = () => {
    setCommentModal(true);
  };

  const openShare = () => {
    navigate('/share')
    // setShareModal(true);

  };

  const navigate = useNavigate()

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
          <img onClick={openShare} className="sidebar__iconb" alt="share icon" src={share} />
          <img className="sidebar__iconb" alt="save icon" src={save} />
        </div>
      </div>
    </>
  );
}
