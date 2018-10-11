import React, { Component } from 'react';
import Weather from './components/Weather';
import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = '57415c5a14cf8b80722c0ad149e7b2a5';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    temperature: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country){
      console.log(data);

      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        error: ''
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        temperature: undefined,
        error: 'Please enter the values.'
      })
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
