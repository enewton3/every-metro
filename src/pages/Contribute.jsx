import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Contribute.css";

//gets ID of linked system from params,
//pulls the data to pre fill the form
//user makes edits,
//pushes edits to the contribute table

export default function Contribute() {
  const params = useParams();
  const [system, setSystem] = useState({
    fields: {
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
      Modes: "List Public Transit Modes",
      LightRailTrams: "Associated Light Rail systems",
      TransitMapUrl: "Transit Map URL",
      RollingStock: "Rolling Stock Info URL",
      PaymentType: "List accepted Payment Types",
      MetroCardName: "Metro Card Name",
      TransitMuseum: "Transit Museum?",
      Notes: "Any Notes?",
      Logo: "Operator Logo URL",
      OperatorWebsite: "Operator Website URL",
      Image: "Link to a related system image",
      Metro_Systems: `${params.id}`,
    },
  });

  const fields = {
    City: `${system.fields.City}`,
    Country: `${system.fields.Country}`,
    Region: `${system.fields.Region}`,
    Name: `${system.fields.Name}`,
    OperatedBy: `${system.fields.OperatedBy}`,
    YearOpened: `${system.fields.YearOpened}`,
    NumOfLines: `${system.fields.NumOfLines}`,
    Stations: `${system.fields.Stations}`,
    SystemLength: `${system.fields.SystemLength}`,
    AnnualRidershipInMillions: `${system.fields.AnnualRidershipInMillions}`,
    WikiPage: `${system.fields.WikiPage}`,
    Modes: `${system.fields.Modes}`,
    LightRailTrams: `${system.fields.LightRailTrams}`,
    TransitMapUrl: `${system.fields.TransitMapUrl}`,
    RollingStock: `${system.fields.RollingStock}`,
    PaymentType: `${system.fields.PaymentType}`,
    MetroCardName: `${system.fields.MetroCardName}`,
    TransitMuseum: `${system.fields.TransitMuseum}`,
    Notes: `${system.fields.Notes}`,
    Logo: `${system.fields.Logo}`,
    OperatorWebsite: `${system.fields.OperatorWebsite}`,
    Image: `${system.fields.Image}`,
    Metro_Systems: [`${params.id}`],
  };

  const catchNonTextAndExtra = (obj) => {
    //go through the objects keys and make sure they are what we want to be sending
    //then go through the objects values and make sure they are all strings
    //return a new object
  };

  useEffect(() => {
    const getSystem = async () => {
      let recordURL = `${baseURL}/Metro_Systems/${params.id}`;
      try {
        let response = await axios.get(recordURL, config);
        setSystem({
          ...response.data,
          fields: {
            ...system.fields,
            ...response.data.fields,
          },
        });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSystem({
      fields: {
        ...system.fields,
        [name]: value,
      },
    });
  };

  // Thanks Soleil for the following reduce!
  const systemKeysAsArray = Object.keys(system.fields);
  const systemValuesAsArray = Object.values(system.fields);
  const betterKeyNames = systemKeysAsArray.map((key) => {
    const words = key.split("").reduce((a, cha, i) => {
      if (cha === cha.toUpperCase()) {
        a.push(cha);
      } else {
        a[a.length - 1] += cha;
      }
      return a;
    }, []);
    let detailName = words.join(" ");
    return detailName;
  });
  console.log(system);
  console.log(system.fields);
  console.log(systemValuesAsArray);
  return (
    <div>
      <div className="contribute">
        <form onSubmit={(e) => handleSubmit(e)}>
          {systemKeysAsArray.map((item, index) => {
            if (
              item === "Metro_Systems" ||
              item === "Visited" ||
              item === "TransitMap" ||
              item === "LightRailTrams" ||
              item === "MetroCardImage" ||
              item === "logo" ||
              item === "reviews"
            ) {
              return null;
            } else {
              return (
                <div key={`${item}`} className="label-input">
                  <label htmlFor={`${item}`}>{betterKeyNames[index]}: </label>
                  <input
                    id={item}
                    name={item}
                    value={systemValuesAsArray[index]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              );
            }
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
