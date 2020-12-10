import aboutImg from "../images/about.jpg";
import evynandali from "../images/evynandali.jpg";
import fb from "../images/social/fb.png";
import ig from "../images/social/igcrop.png";
import "./About.css";

export default function About() {
  return (
    <div>
      <div
        className="about-img"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-section">
        <div className="us-about">
          <h2>About Us</h2>
          <p>
            Ali and Evyn are Every Metro! We love to travel to new places and
            experience cities in different ways. We are a pair of language,
            theater, coding, and train nerds.
          </p>
        </div>
        <div className="site-about">
          <h2>About the site</h2>
          <p>
            We wanted to combine our love of travel with our love of data, so
            Evyn started an Airtable base to collate information about every
            metro system / public transit system in the world. Now you can help
            build that database!
          </p>
        </div>
        <div className="social">
          <h3>Follow us on Social Media!</h3>
          <a
            id="fb"
            href="https://www.facebook.com/everymetro"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialIcon" src={fb} alt="facebook icon" />
          </a>
          <a
            id="ig"
            href="https://www.instagram.com/everymetrointheworld/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialIcon" src={ig} alt="instagram icon" />
          </a>
        </div>
        <img id="evyn-and-ali" src={evynandali} alt="Evyn and Ali" />
      </div>
    </div>
  );
}
