import cross from "../../assets/icons/close.png";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Comments from "../../components/Comments/Comments";
import { useState } from "react";

import "./HomePage.scss";

export default function HomePage() {
  const [commentModal, setCommentModal] = useState(false)

  return (
    <div className="homepage">
      <div className="homepage__navigation">
        <img src={cross} className="homepage__cross" />
        <Button />
      </div>
      <div className="homepage__container">
        <Card commentModal={commentModal} setCommentModal={setCommentModal} />
      </div>
      <Comments commentModal={commentModal} setCommentModal={setCommentModal} />
    </div>
  );
}
