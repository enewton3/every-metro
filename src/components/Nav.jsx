import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import hamburger from "../images/hamburgericon.png";

//window resizing events help from https://www.jsdiaries.com/how-to-get-the-width-of-the-window-in-react-js/

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerToggle: false,
      windowWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState(() => ({
      windowWidth: window.innerWidth,
    }));
    if (this.state.windowWidth > 1020) {
      this.setState({ burgerToggle: true });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="nav">
        <Link className="nav-title" to="/">
          <h2 className="nav-title">Every Metro in the World</h2>
        </Link>
        <ul
          className="link-list"
          style={
            this.state.burgerToggle ? { display: "flex" } : { display: "none" }
          }
        >
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
        <img
          className="hamburger"
          src={hamburger}
          alt="hamburger menu"
          onClick={() =>
            this.setState(
              this.state.burgerToggle
                ? { burgerToggle: false }
                : { burgerToggle: true }
            )
          }
        ></img>
      </div>
    );
  }
}

// export default function Nav() {
//   const [burgerToggle, setBurgerToggle] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   window.addEventListener("resize", setWindowWidth(window.innerWidth));

//   useEffect(() => {
//     console.log(windowWidth);
//     console.log(window.innerWidth);
//   }, [burgerToggle]);

//   );
// }

export default Nav;
