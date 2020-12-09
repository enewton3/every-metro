import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link className="nav-title" to="/">
        <h2 className="nav-title">Every Metro in the World</h2>
      </Link>
      <ul className="link-list">
        <li>
          <Link className="nav-link" to="/search">
            Search for a Metro System
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/tracker">
            Track Every Metro
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/search">
            Contribute Data
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
