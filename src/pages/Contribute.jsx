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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input />
      </form>
    </div>
  );
}
