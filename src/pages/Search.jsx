import axios from "axios";
import searchimg from "../images/search.jpg";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchDropdown from "../components/SearchDropdown";
import SystemCard from "../components/SystemCard";
// import TypeAhead from "../components/TypeAhead";
import "./Search.css";

function Search() {
  const [systems, setSystems] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [searchedSystems, setSearchedSystems] = useState([]);

  function removeThenAlpha(arr) {
    //takes an array, remove dupes, then alphabatizes
    let newArray = arr
      .filter((item, index) => arr.indexOf(item) === index)
      .sort();
    return newArray;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchedCity(e.target[0].value);
  }

  // All of the UseEffects...
  useEffect(() => {
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
        setSystems(concattedRecords);
      } catch (error) {
        console.log(error);
      }
    }
    getSystems();
  }, []);

  useEffect(() => {
    function getCountries() {
      let countriesArray = removeThenAlpha(
        systems.map((item) => item.fields.Country)
      );
      setCountries(countriesArray);
    }
    getCountries();
  }, [systems]);

  useEffect(() => {
    function getCities() {
      let citiesInCountry = systems.filter(
        (item) => item.fields.Country === searchedCountry
      );
      let citiesArray = removeThenAlpha(
        citiesInCountry.map((item) => item.fields.City)
      );
      setCities(citiesArray);
    }

    getCities();
  }, [searchedCountry, systems]);

  useEffect(() => {
    function findCitySystems() {
      let systemsInCity = systems.filter((item) =>
        item.fields.City.toLowerCase().includes(searchedCity.toLowerCase())
      );
      setSearchedSystems(systemsInCity);
    }

    findCitySystems();
  }, [searchedCity, systems]);

  return (
    <div>
      <div
        className="header-img"
        style={{ backgroundImage: `url(${searchimg})` }}
      >
        <h1 className="search-title">Search Metro Systems</h1>
      </div>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search Systems"
            value={searchedCity}
            onChange={(e) => setSearchedCity(e.target.value)}
          />
          <button type="submit">Search</button>

          <div className="dropdowns">
            <label className="dropdown-label" htmlFor="country-dropdown">
              Country:
            </label>
            <SearchDropdown
              id="country-dropdown"
              name="countries"
              setSearched={setSearchedCountry}
              searched={searchedCountry}
              array={countries}
            />
            <label className="dropdown-label" htmlFor="city-dropdown">
              City:
            </label>
            <SearchDropdown
              name="cities"
              id="city-dropdown"
              setSearched={setSearchedCity}
              searched={searchedCity}
              array={cities}
            />
          </div>
        </form>
      </div>
      <div className="systems">
        {searchedSystems.map((system, index) => (
          <Link key={`${index}`} to={`/details/${system.id}`}>
            <SystemCard system={system} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
