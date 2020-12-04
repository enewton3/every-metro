import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h2>Every Metro in the World</h2>
      </Link>
      <ul>
        <li>
          <Link to="/search">Search for a Metro System</Link>
        </li>
        <li>
          <Link to="/tracker">Track Every Metro</Link>
        </li>
        <li>
          <Link to="/search">Contribute Data</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
