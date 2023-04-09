import React from 'react'
import pin from './images/pin.png'
import search from './images/search.png'
import './Inputs.css'

function Inputs() {
    return (
        <div className = "InputsBody">
            <div className = "SearchBody">
                <input className = "SearchBar focus:outline-none capitalize" type = "text" placeholder = "Search"/>
                <img src = {search} alt = "search" className = "Icons" />
                <img src = {pin} alt = "pin" className = "Icons" />
            </div>
            <div className = "DegreesBody">
                <button name = "metric" className = "Degrees"> &deg; C </button>
                <p className = "Degrees"> | </p>
                <button name = "imperial" className = "Degrees"> &deg; F </button>
            </div>
        </div>
    )
}

export default Inputs
