import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';
const apiKey = 'a2862d894f40dfa965c78c830dcfe9c5';

const getAllCountries = () => {
  const request = axios.get(`${baseUrl}api/all`);
  return request;
};

const getCountry = (name) => {
  const request = axios.get(`${baseUrl}api/name/${name}`);
  return request;
};

const getWeather = (city) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return request;
};

export { getCountry, getAllCountries, getWeather };
