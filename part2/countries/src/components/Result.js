import Langs from './Langs';

const Result = ({ tooManyRequests, matchedCountries, showDetails }) => {
  if (tooManyRequests === true) {
    return matchedCountries.map((el, i) => {
      return <div key={el.name.common + i}>{el.name.common}</div>;
    });
  } else if (!tooManyRequests && matchedCountries.length === 1) {
    return matchedCountries.map((el, i) => {
      const langs = Object.values(el.languages);
      return (
        <ul>
          <li key={el.name + i}>{el.name.common}</li>
          <li key={el.name + el.capital}>Capital: {el.capital[0]}</li>
          <li key={el.name + el.area}>Area: {el.area}</li>
          <li key={el.name + 'languages'}>
            Languages:
            <ul>
              <Langs langs={langs} />
            </ul>
          </li>
          <div key={el.name + el.flags.alt}>
            <img
              src={el.flags.png}
              alt={el.flags.alt}
              width="300"
            ></img>
          </div>
        </ul>
      );
    });
  } else if (!tooManyRequests && matchedCountries.length > 0) {
    return matchedCountries.map((el, i) => {
      return (
        <div key={el.name.common + i + 1}>
          <span key={el.name.common + i}>{el.name.common}</span>
          <span>
            <button onClick={() => showDetails(el.name.common)}>
              Show details
            </button>
          </span>
        </div>
      );
    });
  }
};

export default Result;
