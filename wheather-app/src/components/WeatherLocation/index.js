import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  THUNDER,
  DRIZZLE
} from "../../constants/weathers";

const data = {
  temperature: 235,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

const data2 = {
  temperature: 211,
  weatherState: WINDY,
  humidity: 13,
  wind: "14 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Mexa",
      data: data
    };
  }

  handleUpdateClick = () => {
    this.setState({
      city: "CDMX",
      data: data2
    });
    console.log("hi");
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
