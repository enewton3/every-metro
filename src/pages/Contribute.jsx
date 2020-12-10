import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";

//gets ID of linked system from params,
//pulls the data to pre fill the form
//user makes edits,
//pushes edits to the contribute table

export default function Contribute() {
  const [system, setSystem] = useState({});
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
    Logo: "Operator Logo URL",
    OperatorWebsite: "Operator Website URL",
    Metro_Systems: null,
  };

  useEffect(() => {
    const getSystem = async () => {
      let recordURL = `${baseURL}/Metro_Systems/${params.id}`;
      try {
        let response = await axios.get(recordURL, config);
        console.log(response);
        setSystem({
          ...response.data,
          fields: {
            ...fields,
            ...response.data.fields,
          },
        });
        console.log(fields);
        console.log(system);
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

  const systemKeysAsArray = Object.keys(fields);

  console.log(systemKeysAsArray);
  const getBetterKeyNames = systemKeysAsArray.map((key) => {
    // Thanks Soleil for the following reduce!
    // take each character of the key and let's do something with it
    const words = key.split("").reduce((a, cha, i) => {
      // if the current letter is a capital letter, it signifies the beginning of a word
      if (cha === cha.toUpperCase()) {
        // to create a new word, we add a new element at the end of the array to append our lowercase letters to
        a.push(cha);
        // if the current key is a lowercase letter, it is just part of a word
      } else {
        // so add it to the current word
        a[a.length - 1] += cha;
      }
      return a;
    }, []);
    let detailName = words.join(" ");
    return detailName;
  });

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* {system.fields.map((item) => (
          <input />
        ))} */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
