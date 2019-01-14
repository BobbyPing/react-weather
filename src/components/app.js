import React, { Component } from 'react';

import Titles from "./Titles"; 
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "c88424defc681cc8ddf01072a4fca756";

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined, 
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        errror:""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined, 
        humidity: undefined,
        description: undefined,
        error: "Please enter City and Country."
      });
    }
  }  
  render() {
    return (
      <div className='app'>
        <div className = "header">
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
