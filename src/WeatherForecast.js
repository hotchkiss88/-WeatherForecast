import React, { Component } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastList from "./WeatherForecastList";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: [],
    };
  }

  componentDidMount() {
    this.getWeatherData();
    this.timer = setInterval(() => this.getWeatherData(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getWeatherData = () => {
    axios.get("https://danepubliczne.imgw.pl/api/data/synop").then((res) => {
      const weatherData = res.data;

      this.setState((state) => {
        let newWeatherList = [];

        for (const weatherObject of weatherData) {
          let newWeatherObject = {
            city: weatherObject.stacja,
            temperature: weatherObject.temperatura,
            humidity: weatherObject.wilgotnosc_wzgledna,
            pressure: weatherObject.cisnienie,
            stationId: weatherObject.id_stacji,
          };

          newWeatherList.push(newWeatherObject);
        }
        return {
          weatherList: newWeatherList,
        };
      });
    });
  };
  render() {
    return (
      <div className="weatherWrapper">
        <WeatherForecastList weatherList={this.state.weatherList} />
      </div>
    );
  }
}
export default WeatherForecast;
