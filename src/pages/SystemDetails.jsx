import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

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
  const keys = Object.keys(system.fields);
  // let headerImage = system.fields.image ? system.fields.image : false;

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
      <div className="detailsDiv">
        <h2>System Details</h2>
        <h3 className="detailLabel">City:</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">State:</h3>
        <h3 className="detail">{system.fields.State}</h3>
        <h3 className="detailLabel">Country</h3>
        <h3 className="detail">{system.fields.Country}</h3>
        <h3 className="detailLabel">Region:</h3>
        <h3 className="detail">{system.fields.Region}</h3>
        <h3 className="detailLabel">Operated By:</h3>
        <h3 className="detail">{system.fields.OperatedBy}</h3>
        <h3 className="detailLabel">Year Opened:</h3>
        <h3 className="detail">{system.fields.YearOpened}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
        <h3 className="detailLabel">City</h3>
        <h3 className="detail">{system.fields.City}</h3>
      </div>
    </div>
  );
}
