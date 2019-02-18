import React, { Component } from 'react';
import axios from 'axios';

const weatherKey = 'e312dbeb8840e51f92334498a261ca1d';
let zipCode = 30307;

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            temp: "",
            hum: "",
            ws: ""
        }
    }

    componentDidMount(){
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${weatherKey}`;
        axios.get(weatherUrl)
            .then((weatherData) => {
                console.log(weatherData)
                let weatherAll = weatherData.data
                let temperature = weatherData.data.main.temp
                let humidity = weatherData.data.main.humidity
                let windSpeed = weatherData.data.wind.speed
                this.setState({
                    weather: weatherAll,
                    temp: temperature,
                    hum: humidity,
                    ws: windSpeed
                })
            })
        }

    render() {
        const atlWeather = this.state.weather
        console.log(atlWeather)
        return(
            <div className="main"> 
                <h2 className="page-title">Atlanta Weather</h2>
                <ul className="weatherInfo">
                    <li>Temperature: {this.state.temp} degrees</li>
                    <li>Humidity: {this.state.hum} %</li>
                    <li>Windspeed: {this.state.ws} mph</li>
                    {/* <li>More wind: {atlWeather.wind.speed}</li> */}
                    
                </ul>
            </div>

        )
    }
}

export default Weather;