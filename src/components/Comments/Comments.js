import "./Comments.scss";
import persona from "../../assets/images/persona.png";
import ghost from "../../assets/emojis/ghost.png";
import heart from "../../assets/emojis/heart.png";
import hug from "../../assets/emojis/hug.png";
import roll from "../../assets/emojis/roll.png";
import sweat from "../../assets/emojis/sweat.png";
import tongue from "../../assets/emojis/tongue.png";
import shock from "../../assets/emojis/shock.png";
import close from "../../assets/icons/close.png";
import SingleComment from "../../assets/components/SingleComment/SingleComment";

import { useEffect, useState } from "react";
import axios from "axios";

const Comments = ({ commentModal, setCommentModal }) => {
  // func to close the comment box
  const closeComments = (e) => {
    setCommentModal(false);
  };

  const [userComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState({
    username: "justEm202",
    comment: "",
    likes: 0,
    date: Date.now(),
    image: "http://localhost:8080/images/persona.png",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((res) => {
        setUserComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment]);

  const ghostEmo = "👻";
  const heartEmo = "😍";
  const hugEmo = " 🤗";
  const rollEmo = "🙄";
  const tongueEmo = "😜";
  const sweatEmo = "😅";
  const shockEmo = "😱";

  // add emoji to comments
  const addEmo = (e, emo) => {
    setNewComment((preval) => ({
      ...preval,
      comment: preval.comment + emo,
    }));
  };

  // handles comments
  const formHandler = (e) => {
    e.preventDefault();
    let myComment = e.target.value;
    setNewComment((preval) => ({ ...preval, comment: myComment }));
    console.log(myComment);
  };

  const newPost = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/comments`, newComment)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main
      className="comments"
      style={{ display: commentModal ? "block" : "none" }}
    >
      <div className="comments__under">
        <div className="comments__header">
          <div className="comments__count">
            <div className="comments__num">{userComments.length}</div>
            <div className="comments__total">comments</div>
          </div>

          <div className="comments__close">
            <img
              className="comments__thumbs"
              src={close}
              alt="close icon"
              onClick={closeComments}
            />
          </div>
        </div>
        <div className="comments__wrapper">
          {userComments.map((user) => (
            <SingleComment
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.username}
              comment={user.comment}
              likes={user.likes}
              userComments={userComments}
              setUserComments={setUserComments}
            />
          ))}
        </div>

        {/* {userComments.map(user => (
                    <>
                        <div className='comments__user'>
                            <div className='comments__userIcon'><img className='comments__icon' src={user.image} alt='user icon' /></div>
                            <div className='comments__info'>
                                <span className='comments__username'>{user.username}</span>
                                <p className='comments__comments'>{user.comment}</p>
                            </div>
                        </div>
                        <div className='comments__actions'>
                            <img className='comments__like comments__thumbs' src={like} alt='like icon' />
                            <img className='comments__dislike comments__thumbs' src={dislike} alt='dislike icon' />
                        </div>
                    </>
                )

                )} */}
      </div>

      <div className="comments__bottom">
        <div className="comments__emoji-wrapper">
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, ghostEmo)}
            src={ghost}
            alt="ghost emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, heartEmo)}
            src={heart}
            alt="heart emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, hugEmo)}
            src={hug}
            alt="hug emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, rollEmo)}
            src={roll}
            alt="roll emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, shockEmo)}
            src={shock}
            alt="shock emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, tongueEmo)}
            src={tongue}
            alt="tongue emoji"
          />
          <img
            className="comments__emoji"
            onClick={(e) => addEmo(e, sweatEmo)}
            src={sweat}
            alt="sweatemoji"
          />
          {/* <img className='comments__emoji' src={sunglass} alt='sunglassemoji' />
                <img className='comments__emoji' src={hurt} alt=' hurt emoji' /> */}
        </div>

        <div className="comments__text-wrapper">
          <div className="comments__commenter comments__userIcon">
            <img
              className="comments__userIcon"
              src={persona}
              alt="commenter icon"
            />
          </div>
          <form className="comments__text" onSubmit={newPost}>
            <textarea
              className="comments__textarea"
              placeholder="Add a comment..."
              name="comment"
              value={newComment.comment}
              onChange={formHandler}
            ></textarea>
            <button type="submit" className="comments__btn"></button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Comments;
