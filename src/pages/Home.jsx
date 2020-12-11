import { Link } from "react-router-dom";
import home from "../images/home.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div
        className="home-header-img"
        style={{ backgroundImage: `url(${home})` }}
      >
        <h1 className="home-title">Every Metro in the World</h1>
      </div>
      <h2>A Travel Blog / Data Collection Project</h2>
      <h4>Welcome to Every Metro!</h4>
      <p>
        <Link to="/about">Follow our travels</Link>,<br />{" "}
        <Link to="/search">search for data</Link>,<br /> or contribute some of
        your own!
      </p>
    </div>
  );
}
