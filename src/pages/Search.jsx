import axios from "axios";
import searchimg from "../images/search.jpg";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchDropdown from "../components/SearchDropdown";
import SystemCard from "../components/SystemCard";
import "./Search.css";

function Search() {
  const [systems, setSystems] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [searchedSystems, setSearchedSystems] = useState([]);

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
      setSystems(concattedRecords);
    } catch (error) {
      console.log(error);
    }
  }

  function removeThenAlpha(arr) {
    //takes an array, remove dupes, then alphabatizes
    let newArray = arr
      .filter((item, index) => arr.indexOf(item) === index)
      .sort();
    return newArray;
  }

  function getCountries() {
    let countriesArray = removeThenAlpha(
      systems.map((item) => item.fields.Country)
    );
    setCountries(countriesArray);
  }

  function getCities() {
    let citiesInCountry = systems.filter(
      (item) => item.fields.Country === searchedCountry
    );
    let citiesArray = removeThenAlpha(
      citiesInCountry.map((item) => item.fields.City)
    );
    setCities(citiesArray);
  }

  function findCitySystems() {
    let systemsInCity = systems.filter(
      (item) => item.fields.City === searchedCity
    );
    setSearchedSystems(systemsInCity);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchedCity(e.target[0].value);
  }

  // All of the UseEffects...
  useEffect(() => {
    getSystems();
  }, []);

  useEffect(() => {
    getCountries();
  }, [systems]);

  useEffect(() => {
    getCities();
  }, [searchedCountry]);

  useEffect(() => {
    findCitySystems();
  }, [searchedCity]);

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
        <label className="dropdown-label" for="country-dropdown">
          Country:
        </label>

        <SearchDropdown
          id="country-dropdown"
          name="countries"
          setSearched={setSearchedCountry}
          searched={searchedCountry}
          array={countries}
        />
        <label className="dropdown-label" for="city-dropdown">
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
