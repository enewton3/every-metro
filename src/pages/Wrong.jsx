import { Link } from "react-router-dom";
import wrongImg from "../images/wrongImg.jpg";
import "./Wrong.css";

export default function Wrong() {
  return (
    <div id="wrong-img" style={{ backgroundImage: `url(${wrongImg})` }}>
      <h3 id="theText">Looks like you found yourself a bit off the rails!</h3>
      <Link id="goHome" to="/">
        <h4>Go Home!</h4>
      </Link>
    </div>
  );
}
