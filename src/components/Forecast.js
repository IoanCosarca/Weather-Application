import React from 'react'
import './Forecast.css'

function Forecast({title}) {
    return (
        <div>
            <div className = "TitleBody">
                <p className = "Title">{title}</p>
            </div>
            <hr />

            <div className = "ForecastsBody">
                <div className = "ForecastEntry">
                    <p className = "Hour">04:30 PM</p>
                    <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" className = "WeatherImg" />
                    <p className = "ForecastTemp">22&deg;</p>
                </div>
                <div className = "ForecastEntry">
                    <p className = "Hour">04:30 PM</p>
                    <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" className = "WeatherImg" />
                    <p className = "ForecastTemp">22&deg;</p>
                </div>
                <div className = "ForecastEntry">
                    <p className = "Hour">04:30 PM</p>
                    <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" className = "WeatherImg" />
                    <p className = "ForecastTemp">22&deg;</p>
                </div>
                <div className = "ForecastEntry">
                    <p className = "Hour">04:30 PM</p>
                    <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" className = "WeatherImg" />
                    <p className = "ForecastTemp">22&deg;</p>
                </div>
                <div className = "ForecastEntry">
                    <p className = "Hour">04:30 PM</p>
                    <img src = "http://openweathermap.org/img/wn/01d@2x.png" alt = "" className = "WeatherImg" />
                    <p className = "ForecastTemp">22&deg;</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast
