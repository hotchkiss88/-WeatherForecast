import React from "react";
import "./WeatherForecastList.css";

function WeatherForecastList(props) {
  let weatherList = props.weatherList;

  let liElement = weatherList.map((weatherObject) => {
    return (
      <li key={weatherObject.stationId}>
        <p className="cityName"> {weatherObject.city} </p>
        <p className="airTemperature">
          Temperatura: <span> {weatherObject.temperature}&deg;C </span>
        </p>
        <p className="airRelativeHumidity">
          Wilgotność powietrza: <span> {weatherObject.humidity}% </span>
        </p>
        <p className="atmosphericPressure">
          Ciśnienie: <span> {weatherObject.pressure}hPa </span>
        </p>
      </li>
    );
  });

  console.log(weatherList);
  return (
    <div className="weatherForecastList">
      <ul className="theList">{liElement}</ul>
    </div>
  );
}

export default WeatherForecastList;
