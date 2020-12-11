import { Link } from "react-router-dom";
import "./Wrong.css";
import thanksimg from "../images/thanks.jpg";

export default function Thanks() {
  return (
    <div id="thanks-img" style={{ backgroundImage: `url(${thanksimg})` }}>
      <h3 id="theText">
        Thanks for Contributing! <br /> Your changes are under review, and
        should be displayed soon!
      </h3>
      <Link id="goHome" to="/">
        <h4>Go Home!</h4>
      </Link>
    </div>
  );
}
