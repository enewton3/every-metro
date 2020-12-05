import axios from "axios";
import searchimg from "../images/search.jpg";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import "./Search.css";

function Search() {
  const [systems, setSystems] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  async function getSystems() {
    let pageOneURL = `${baseURL}/Metro_Systems`;
    try {
      let response = await axios.get(pageOneURL, config);
      let offset = response.data.offset;
      let pageTwoURL = `${baseURL}/Metro_Systems?offset=${offset}`;
      let pageTwoResponse = await axios.get(pageTwoURL, config);
      let pageOne = response.data.records;
      let pageTwo = pageTwoResponse.data.records;
      let concattedRecords = [...pageOne, ...pageTwo];
      console.log(concattedRecords);
      // setSystems(concattedRecords);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSystems();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchedCity(e.target[0].value);
  }

  return (
    <div>
      <div
        className="header-img"
        style={{ backgroundImage: `url(${searchimg})` }}
      >
        <h1>Search Metro Systems</h1>
      </div>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Systems"
            value={searchedCity}
            onChange={(e) => setSearchedCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <select
          className="cities-dropdown"
          name="cities"
          value={searchedCity}
          onChange={(e) => setSearchedCity(e.target.value)}
        >
          {cities.map((city) => (
            <option value={city.fields.City}>{city.fields.City}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Search;
