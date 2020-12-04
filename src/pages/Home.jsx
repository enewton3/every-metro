import home from "../images/home.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div
        className="home-header-img"
        style={{ backgroundImage: `url(${home})` }}
      >
        <h1>Every Metro in the World</h1>
      </div>
      <h2>Blurb</h2>
    </div>
  );
}
