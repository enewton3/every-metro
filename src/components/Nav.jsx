import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import hamburger from "../images/hamburgericon.png";

//window resizing events help from https://www.jsdiaries.com/how-to-get-the-width-of-the-window-in-react-js/

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggle: true,
      burgerToggle: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    if (window.innerWidth > 1020) {
      this.setState({
        burgerToggle: false,
        navToggle: true,
      });
    } else if (window.innerWidth <= 1020) {
      this.setState({ navToggle: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  //if >1020 navToggle is true
  //if < 1020 navToggle is false

  render() {
    return (
      <div className="nav">
        <Link className="nav-title" to="/">
          <h2 className="nav-title">Every Metro in the World</h2>
        </Link>
        <ul
          className="link-list"
          style={
            this.state.navToggle || this.state.burgerToggle
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <li>
            <Link className="nav-link" to="/search">
              Search for a Metro System
            </Link>
          </li>
          {/* <li>
            <Link className="nav-link" to="/tracker">
              Track Every Metro
            </Link>
          </li> */}
          {/* <li>
            <Link className="nav-link" to="/contribute">
              Contribute Data
            </Link>
          </li> */}
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

export default Nav;
