import background from "../../assets/images/black-rectangle.png";
import "./Background.scss";
export default function Background() {
  return (
    <>
      <img className="bottom__image" alt="bottom image" src={background} />
    </>
  );
}
