import { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureDetails from './components/TemperatureDetails';
import TimeLocation from './components/TimeLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

function App() {
    const [query, setQuery] = useState({ q: "Cluj-Napoca" })
    const [units, setUnits] = useState("metric")
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then(data => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);

    const formatBackground = () => {
        if (!weather) {
            return "rgb(29,152,216) linear-gradient(180deg, rgba(29,152,216,1) 0%, rgba(29,165,216,1) 50%, rgba(25,176,255,1) 100%)";
        }
        if (weather.dt >= weather.sunrise && weather.dt < weather.sunset) {
            return "rgb(29,152,216) linear-gradient(180deg, rgba(29,152,216,1) 0%, rgba(29,165,216,1) 50%, rgba(25,176,255,1) 100%)";
        }
        return "rgb(1,2,42) linear-gradient(180deg, rgba(1,2,42,1) 0%, rgba(4,28,102,1) 50%, rgba(3,65,175,1) 100%)";
    };

    return (
        <div className="AppBody" style={{ background: formatBackground() }}>
            <TopButtons setQuery={setQuery} />
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

            {weather && (
                <div>
                    <TimeLocation weather={weather} />
                    <TemperatureDetails weather={weather} />

                    <Forecast title="Hourly Forecast" items={weather.hourly} />
                    <Forecast title="Daily Forecast" items={weather.daily} />
                </div>
            )}
        </div>
    );
}

export default App;
