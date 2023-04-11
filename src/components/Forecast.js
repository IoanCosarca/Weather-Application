import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'
import './Forecast.css'

function Forecast({ title, items }) {
    return (
        <div>
            <div className="TitleBody">
                <p className="Title">{title}</p>
            </div>
            <hr />

            <div className="ForecastsBody">
                {items.map((item) => (
                    <div className="ForecastEntry" key = {Math.random()}>
                        <p className="Hour">{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} alt="weatherImg" className="WeatherImg" />
                        <p className="ForecastTemp">{`${item.temp.toFixed()}`}&deg;</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast
