import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";

//gets ID of linked system from params,
//pulls the data to pre fill the form
//user makes edits,
//pushes edits to the contribute table

export default function Contribute() {
  const [system, setSystem] = useState([]);
  const params = useParams();

  const fields = {
    City: "City",
    Country: "Country",
    Region: "Region",
    Name: "Name",
    OperatedBy: "Operated By",
    YearOpened: "Year Opened",
    NumOfLines: "Num Of Lines",
    Stations: "Stations",
    SystemLength: "System Length",
    AnnualRidershipInMillions: "Annual Ridership In Millions",
    WikiPage: "Wiki Page URL",
    Modes: null,
    //is there a way to get options from airtable?
    //is there a way to get an object of fields from airtable?
    //I have all this in system details technically, do I need to do this again?
    //How do I now use this to create a form?
    LightRailTrams: "Associated Light Rail systems",
    TransitMapUrl: "Transit Map URL",
    RollingStock: "Rolling Stock Info URL",
    PaymentType: null,
    MetroCardName: "Metro Card Name",
    TransitMuseum: false,
    Notes: "Any other Notes?",
    logo: "Operator Logo URL",
    OperatorWebsite: "Operator Website URL",
    Metro_Systems: null,
  };

  useEffect(() => {
    const getSystem = async () => {
      let recordURL = `${baseURL}/Metro_Systems/${params.id}`;
      try {
        let response = await axios.get(recordURL, config);
        console.log(response);
        setSystem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSystem();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contributeURL = `${baseURL}/contribute`;
    try {
      await axios.post(contributeURL, { fields }, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
