import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import "./SystemDetails.css";
import detailsimg from "../images/details.jpg";

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
      image: "",
    },
  });
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  async function getSystem() {
    const url = `${baseURL}/Metro_Systems/${params.id}`;
    try {
      let response = await axios.get(url, config);
      setSystem(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  let headerImage = system.fields.image ? system.fields.image : detailsimg;

  useEffect(() => {
    getSystem();
  });

  return (
    <div>
      <div
        className="header-img"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1>{system.fields.Name}</h1>
      </div>
      <section className="system-details">
        <div className="detailsDiv">
          <h2>System Details</h2>
          <p className="detail">
            <strong>City:</strong>{" "}
            <span className="detail-value">{system.fields.City}</span>
          </p>
          <p className="detail">
            <strong>State: </strong>
            <span>{system.fields.State}</span>
          </p>
          <p className="detail">
            <strong>Country: </strong>
            <span>{system.fields.Country}</span>
          </p>
          <p className="detail">
            <strong>Region: </strong>
            <span>{system.fields.Region}</span>
          </p>
          <p className="detail">
            <strong>Operated By: </strong>
            <span>{system.fields.OperatedBy}</span>
          </p>
          <p className="detail">
            <strong>Year Opened: </strong>
            <span>{system.fields.YearOpened}</span>
          </p>
          <p className="detail">
            <strong>Number of Lines: </strong>
            <span>{system.fields.NumOfLines}</span>
          </p>
          <p className="detail">
            <strong>Number of Stations: </strong>
            <span>{system.fields.Stations}</span>
          </p>
          <p className="detail">
            <strong>System Length: </strong>
            <span>{system.fields.SystemLength}</span>
          </p>
          <p className="detail">
            <strong>Annual Ridership in Millions: </strong>
            <span>{system.fields.AnnualRidershipinMillions}</span>
          </p>
          <p className="detail">
            <strong>Wiki Page: </strong>
            <span>
              <a href={system.fields.WikiPage}> here </a>
            </span>
          </p>
          <p className="detail">
            <strong>Rolling Stock: </strong>
            <span>
              <a href={system.fields.RollingStock}>here </a>
            </span>
          </p>
          <p className="detail list">
            <strong>Payment Types: </strong>
            {system.fields.PaymentType
              ? system.fields.PaymentType.map((item) => (
                  <span className="paymentType">{item}</span>
                ))
              : system.fields.PaymentType}
          </p>
          <p className="detail">
            <strong>Metro Card Name: </strong>
            <span>{system.fields.MetroCardName}</span>
          </p>
          <p className="detail list">
            <strong>Modes: </strong>
            {system.fields.Modes
              ? system.fields.Modes.map((item) => (
                  <span className="mode">{item}</span>
                ))
              : system.fields.Modes}
          </p>
          <p className="detail">
            <strong>Transit Museum: </strong>
            <span>{system.fields.TransitMuseum ? "yes" : "no"}</span>
          </p>
          <p className="detail">
            <strong>Light Rail System: </strong>
            <span>
              {system.fields.LightRailTrams ? (
                <Link to={`/details/${system.fields.LightRailTrams}`}>
                  here
                </Link>
              ) : (
                false
              )}
            </span>
          </p>
        </div>
        <div className="images">
          <img
            id="system-image"
            src={`${system.fields.logo}`}
            alt={`${system.fields.OperatedBy} logo`}
          />
          <img
            id="transit-map"
            src={`${
              system.fields.TransitMap ? system.fields.TransitMap[0] : null
            }`}
            alt={`${system.fields.name} transit map`}
          />
        </div>
      </section>
      {/* Review Section */}
      <section></section>
    </div>
  );
}
