import React from 'react'
import thermometer from './images/thermometer.png'
import humid from './images/humidity.png'
import wind from './images/wind.png'
import sun from './images/sun.png'
import sundown from './images/sunset.png'
import hightemp from './images/high-temperature.png'
import lowtemp from './images/low-temperature.png'
import './TemperatureDetails.css'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TemperatureDetails({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) {
    return (
        <div>
            <div className = "Status">
                <p>{details}</p>
            </div>
            <div className = "WeatherDetails">
                <img src = {iconUrlFromCode(icon)} alt = "" />
                <p className = "Temperature">
                    {`${temp.toFixed()}`}&deg;
                </p>
                <div className = "Statistics">
                    <div className = "StatisticBody">
                        <img src = {thermometer} alt = "thermometer" className = "SmIcon" />
                        Real fell:
                        <span className = "Data">{`${feels_like.toFixed()}`}&deg;</span>
                    </div>
                    <div className = "StatisticBody">
                        <img src = {humid} alt = "humidity" className = "SmIcon" />
                        Humidity:
                        <span className = "Data">{`${humidity.toFixed()}`}%</span>
                    </div>
                    <div className = "StatisticBody">
                        <img src = {wind} alt = "wind" className = "SmIcon" />
                        Wind:
                        <span className = "Data">{`${speed.toFixed()}`} km/h</span>
                    </div>
                </div>
            </div>
            <div className = "SunAndTemps">
                <img src = {sun} alt = "sun" />
                <p className = "Row">
                    Rise:
                    <span className = "Data">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {sundown} alt = "sunset" />
                <p className = "Row">
                    Set:
                    <span className = "Data">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {hightemp} alt = "hightemp" />
                <p className = "Row">
                    High:
                    <span className = "Data">{`${temp_max.toFixed()}`}&deg;</span>
                </p>
                <p className = "Row"> | </p>

                <img src = {lowtemp} alt = "lowtemp" />
                <p className = "Row">
                    Low:
                    <span className = "Data">{`${temp_min.toFixed()}`}&deg;</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureDetails
