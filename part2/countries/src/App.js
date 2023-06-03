import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getAllCountries, getCountry, getWeather } from './components/API';
import Result from './components/Result';
import CountryInfo from './components/CountryInfo';

function App() {
  const [countries, setCountries] = useState([]);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [tooManyRequests, setTooManyRequests] = useState(false);
  const [countryDetails, setCountryDetails] = useState(null);
  const [weather, setWeather] = useState('');

  const handleInput = (event) => {
    setCountryDetails(null);
    const value = event.target.value;

    let matchedArr = countries.filter((el) => {
      return el.name.common.toLowerCase().includes(value.toLowerCase());
    });
    if (matchedArr.length > 10) {
      setTooManyRequests(true);
      setMatchedCountries([
        { name: { common: 'To many matches, please specify another filter' } }
      ]);
    } else {
      setTooManyRequests(false);
      setMatchedCountries(matchedArr);
    }
  };

  const showDetails = (name) => {
    getCountry(name).then((res) => {
      setCountryDetails(res.data);
      getWeather(res.data.capital).then((res) => {
        setWeather(res.data);
      });
    });
  };

  const getCountries = () => {
    getAllCountries().then((res) => {
      setCountries(res.data);
    });
  };
  useEffect(getCountries, []);

  return (
    <div className="App">
      <form>
        <label>Find country: </label>
        <input
          type="text"
          onChange={handleInput}
        ></input>
      </form>
      <div>
        <Result
          tooManyRequests={tooManyRequests}
          matchedCountries={matchedCountries}
          showDetails={showDetails}
        />
      </div>
      <CountryInfo
        country={countryDetails}
        weather={weather}
      />
    </div>
  );
}

export default App;
