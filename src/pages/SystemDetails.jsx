import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import "./SystemDetails.css";

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
      Modes: "some",
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

  useEffect(() => {
    getSystem();
  });

  return (
    <div>
      <div
        className="header-img"
        // style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1>{system.fields.Name}</h1>
      </div>
      <h2>System Details</h2>
      <div className="detailsDiv">
        <p className="detail">
          <strong>City:</strong>{" "}
          <span className="detail-value">{system.fields.City}</span>
        </p>
        <p className="detail">State: {system.fields.State}</p>
        <p className="detail">Country {system.fields.Country}</p>
        <p className="detail">Region: {system.fields.Region}</p>
        <p className="detail">Operated By: {system.fields.OperatedBy}</p>
        <p className="detail">Year Opened: {system.fields.YearOpened}</p>
        <p className="detail">Number of Lines: {system.fields.NumOfLines}</p>
        <p className="detail">Number of Stations: {system.fields.Stations}</p>
        <p className="detail">System Length: {system.fields.SystemLength}</p>
        <p className="detail">
          Annual Ridership in Millions:{" "}
          {system.fields.AnnualRidershipinMillions}
        </p>
        <p className="detail">Wiki Page: {system.fields.WikiPage}</p>
        <p className="detail">Rolling Stock:{system.fields.RollingStock}</p>
        <p className="detail">
          Payment Types:
          {/* {system.fields.PaymentType.map((item) => ({ item }))} */}
        </p>
        <p className="detail">Metro Card Name:{system.fields.MetroCardName}</p>
        <p className="detail">Modes:</p>
        {/* {() => {
          system.fields.Modes.map((item) => ({ item }));
        }} */}
        <p className="detail">Transit Museum: {system.fields.TransitMuseum}</p>
        <p className="detail">TRANSIT MAP IMAGE Light Rail / Trams</p>
      </div>
    </div>
  );
}
