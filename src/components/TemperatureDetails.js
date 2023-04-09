import React from 'react'
import thermometer from './images/thermometer.png'
import humidity from './images/humidity.png'
import wind from './images/wind.png'
import sun from './images/sun.png'
import sunset from './images/sunset.png'
import hightemp from './images/high-temperature.png'
import lowtemp from './images/low-temperature.png'
import './TemperatureDetails.css'

function TemperatureDetails() {
    return (
        <div>
            <div className = "Status">
                <p>Cloudy or whatever</p>
            </div>
            <div className = "WeatherDetails">
                <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" />
                <p className = "Temperature">
                    34&deg;
                </p>
                <div className = "Statistics">
                    <div className = "StatisticBody">
                        <img src = {thermometer} alt = "thermometer" className = "SmIcon" />
                        Real fell:
                        <span className = "Data">32&deg;</span>
                    </div>
                    <div className = "StatisticBody">
                        <img src = {humidity} alt = "humidity" className = "SmIcon" />
                        Humidity:
                        <span className = "Data">65%</span>
                    </div>
                    <div className = "StatisticBody">
                        <img src = {wind} alt = "wind" className = "SmIcon" />
                        Wind:
                        <span className = "Data">11 km/h</span>
                    </div>
                </div>
            </div>
            <div className = "SunAndTemps">
                <img src = {sun} alt = "sun" />
                <p className = "Row">
                    Rise: 
                    <span className = "Data">06:45 AM</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {sunset} alt = "sunset" />
                <p className = "Row">
                    Set: 
                    <span className = "Data">07:35 PM</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {hightemp} alt = "hightemp" />
                <p className = "Row">
                    High: 
                    <span className = "Data">45&deg;</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {lowtemp} alt = "lowtemp" />
                <p className = "Row">
                    Low: 
                    <span className = "Data">40&deg;</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureDetails
