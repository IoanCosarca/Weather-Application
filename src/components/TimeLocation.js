import React from 'react'
import './TimeLocation.css'
import { formatToLocalTime } from '../services/weatherService'

function TimeLocation({weather: {dt, timezone, name, country}}) {
    return (
        <div>
            <div className = "TimeBody">
                <p className = "Time">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div className = "LocationBody">
                <p className = "Location">
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    )
}

export default TimeLocation
