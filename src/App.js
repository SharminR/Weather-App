import React, { Component } from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css'
// weather-app api key needs to be generated for new production
const API_KEY = "8a1e2fa92e140ef112e22d3bce428ec7";

class App extends Component {
  // state to retain multiple data 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // function that handels api call 
  getWeather = (e) => {
    e.preventDefault(); // prevents page from refreshig upon submision
    const city = e.target.elements.city.value; // gets user input for city
    const country = e.target.elements.country.value; // gets user input for country
    // condition to initialize to fetch data only when user put values
    if (city.length < 1 || country.length < 1) {
      this.setState({
        error: "enter a city and country"
      })
      return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then(d => d.json()) // makes api call to get data from api properties
      .then(data => this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      }))
      .catch(e => console.log(e))
  }
  render() {
    return (
      <div className="container card wrapper main">
        <div className="row">
          <div className="col-xs-5 title-container">
            <Titles />
          </div>
          <div className="col-xs-7 form-container">
            {/* set properties to pass values in Form and Weather components */}
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;