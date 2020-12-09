import "./Foot.css";
import fbico from "../images/social/fb.png";
import igico from "../images/social/igcrop.png";

export default function Foot() {
  return (
    <div className="footer">
      <div>
        <a id="fb" href="https://www.facebook.com/everymetro">
          <img className="socialIcon" src={fbico} alt="facebook icon" />
        </a>
        <p className="ga">
          Built for General Assembly Software Engineering Immersive
        </p>
        <p className="copyright">© Evyn Newton 2020</p>
        <a id="ig" href="https://www.instagram.com/everymetrointheworld/">
          <img className="socialIcon" src={igico} alt="instagram icon" />
        </a>
      </div>
    </div>
  );
}
