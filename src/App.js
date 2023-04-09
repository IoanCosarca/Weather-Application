import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureDetails from './components/TemperatureDetails';
import TimeLocation from './components/TimeLocation';
import TopButtons from './components/TopButtons';

function App() {
    return (
        <div className = "AppBody">
            <TopButtons />
            <Inputs />

            <TimeLocation />
            <TemperatureDetails />

            <Forecast title = "Hourly Forecast" />
            <Forecast title = "Daily Forecast" />
        </div>
    );
}

export default App;
