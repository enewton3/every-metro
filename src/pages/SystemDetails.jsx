import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import "./SystemDetails.css";
import detailsimg from "../images/details.jpg";
import logoDefault from "../images/undergroundicon.png";
import mapDefault from "../images/mapicon.png";
import ReviewCard from "../components/ReviewCard";
import ReviewOverlay from "../components/ReviewOverlay";
import Detail from "../components/Detail";

export default function SystemDetails() {
  const [system, setSystem] = useState({
    fields: {
      City: "City",
      Country: "Country",
      Name: "System Details",
      YearOpened: "1900",
      Stations: "10",
      SystemLength: "10 miles",
      AnnualRidershipinMillions: "2",
      Visited: [],
      WikiPage: "url",
      Modes: [],
      TransitMap: [],
      RollingStock: "some",
      PaymentType: [],
      MetroCardImage: [],
      OperatedBy: "",
      MetroCardName: "",
      NumOfLines: "",
      LightRailTrams: [],
      State: "",
      Region: "",
      TransitMuseum: true,
      Notes: "",
    },
  });
  const [reviews, setReviews] = useState([]);
  const [overlayToggle, setOverlayToggle] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getReviews() {
      const url = `${baseURL}/reviews`;
      try {
        let response = await axios.get(url, config);
        let records = response.data.records;
        let systemReviews = records
          .filter((item) => item.fields.Metro_Systems[0] === params.id)
          .sort((a, b) => {
            const first = new Date(a.fields.Created);
            const second = new Date(b.fields.Created);
            if (second > first) {
              return 1;
            } else if (first > second) {
              return -1;
            } else {
              return 0;
            }
          });
        setReviews(systemReviews);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [overlayToggle, params.id]);

  useEffect(() => {
    async function getSystem() {
      const url = `${baseURL}/Metro_Systems/${params.id}`;
      try {
        let response = await axios.get(url, config);
        setSystem(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSystem();
  }, [params.id]);

  let headerImage = system.fields.image ? system.fields.image : detailsimg;

  const systemEntriesAsArray = Object.entries(system.fields);
  // console.log(systemEntriesAsArray);
  // console.log(system);

  return (
    <div>
      {/* Header */}
      <div
        className="header-img"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1 className="detail-head">{system.fields.Name}</h1>
      </div>
      {/* System Details */}
      <section className="system-details">
        <div className="detailsDiv">
          <h2 id="details-title">System Details</h2>
          {systemEntriesAsArray.map((item) => (
            <Detail key={item} detail={item} />
          ))}
        </div>

        {/* System Image and Map */}
        <a
          id="system-image"
          href={`${system.fields.OperatorWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="system-image"
            src={`${system.fields.logo ? system.fields.logo : logoDefault}`}
            alt={`${system.fields.OperatedBy} logo`}
          />
        </a>
        <a
          id="transit-map"
          href={`${system.fields.TransitMapUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="transit-map"
            src={`${
              system.fields.TransitMapUrl
                ? system.fields.TransitMapUrl
                : mapDefault
            }`}
            alt={`${system.fields.Name} transit map`}
          />
        </a>
        <Link to={`/contribute/${system.id}`} id="contribute-button">
          <button>
            See outdated or missing info? <br />
            Contribute it here!
          </button>
        </Link>
      </section>

      {/* Review Section */}
      <section className="reviews-section">
        <h3 className="review-head">Reviews and Suggestions</h3>
        <button onClick={() => setOverlayToggle(!overlayToggle)}>
          Add your own!
        </button>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}

        {overlayToggle ? (
          <ReviewOverlay setOverlayToggle={setOverlayToggle} system={system} />
        ) : (
          false
        )}
      </section>
    </div>
  );
}
