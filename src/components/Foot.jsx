import "./Foot.css";

export default function Foot() {
  return (
    <div className="footer">
      <div>
        <img
          className="socialIcon"
          src="../images/social/fb.png"
          alt="facebook icon"
        />
        <p>
          Built for General Assembly Software Engineering Immersive <br />
          Copyright Evyn Newton 2020
        </p>
        <img
          className="socialIcon"
          src="../images/social/ig.png"
          alt="instagram icon"
        />
      </div>
    </div>
  );
}
