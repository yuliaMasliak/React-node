const Weather = ({ weather }) => {
  return (
    <div>
      <div>Current weather: {weather.main.temp} Celcius</div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        ></img>
      </div>
      <div>Wind: {weather.wind.speed} m/s</div>
    </div>
  );
};

export default Weather;
