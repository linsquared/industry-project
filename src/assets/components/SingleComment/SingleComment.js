import "./SingleComment.scss";
import like from "../../icons/comments_like.png";
import dislike from "../../icons/comments_dislike.png";
import axios from "axios";

const SingleComment = ({
  image,
  name,
  comment,
  likes,
  id,
  userComments,
  setUserComments,
}) => {
  // function to add likes
  const addLikes = () => {
    axios
      .put(`http://localhost:8080/comments/${id}`, { likes: likes + 1 })
      .then((res) => {
        console.log(res);
        setUserComments(res.data);
      })
      .catch((err) => console.log(err));
    console.log(userComments);
  };

  // subtract likes
  const minuslike = (e) => {
    axios
      .put(`http://localhost:8080/comments/${id}`, { likes: likes - 1 })
      .then((res) => {
        console.log(res);
        setUserComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="comments__block">
      <div className="comments__user">
        <div className="comments__userIcon">
          <img className="comments__icon" src={image} alt="user icon" />
        </div>
        <div className="comments__info">
          <span className="comments__username">{name}</span>
          <p className="comments__comments">{comment}</p>
        </div>
      </div>
      <div className="comments__actions">
        <div className="comments__addlikes">
          <img
            className="comments__like comments__thumbs"
            src={like}
            alt="like icon"
            onClick={addLikes}
          />
          {likes}
        </div>
        <img
          className="comments__dislike comments__thumbs"
          onClick={minuslike}
          src={dislike}
          alt="dislike icon"
        />
      </div>
    </div>
  );
};

export default SingleComment;
