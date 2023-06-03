import Langs from './Langs';
import Weather from './Weather';

const CountryInfo = ({ country, weather }) => {
  if (!country) {
    return null;
  } else {
    return (
      <div>
        <ul>
          <h2 key={country.name}>{country.name.common}</h2>
          <li key={country.name + country.capital}>
            Capital: {country.capital[0]}
          </li>
          <li key={country.name + country.area}>Area: {country.area}</li>
          <li key={country.name + 'languages'}>
            <h4>Languages:</h4>
            <ul>
              <Langs langs={Object.values(country.languages)} />
            </ul>
          </li>
          <div key={country.name + country.flags.alt}>
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              width="300"
            ></img>
          </div>
        </ul>
        <h4>Weather:</h4>
        <Weather weather={weather} />
      </div>
    );
  }
};

export default CountryInfo;
