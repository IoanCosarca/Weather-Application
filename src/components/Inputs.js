import React, { useState } from 'react'
import pin from './images/pin.png'
import search from './images/search.png'
import './Inputs.css'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleKeyPressed = (event) => {
        if (event.key === "Enter") {
            setQuery({ q: city });
        }
    }

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({ q: city });
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({ lat, lon });
            });
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) {
            setUnits(selectedUnit);
        }
    };

    return (
        <div className="InputsBody">
            <div className="SearchBody">
                <input className="SearchBar" type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.currentTarget.value)} onKeyDown={handleKeyPressed} />
                <img src={search} alt="search" className="Icons" onClick={handleSearchClick} />
                <img src={pin} alt="pin" className="Icons" onClick={handleLocationClick} />
            </div>
            <div className="DegreesBody">
                <button name="metric" className="Degrees" onClick={handleUnitsChange}> &deg; C </button>
                <p className="Degrees"> | </p>
                <button name="imperial" className="Degrees" onClick={handleUnitsChange}> &deg; F </button>
            </div>
        </div>
    )
}

export default Inputs
