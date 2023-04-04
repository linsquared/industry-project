import cross from "../../assets/icons/close.png";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__navigation">
        <img src={cross} className="homepage__cross" />
        <Button />
      </div>
      <Card />
    </div>
  );
}
