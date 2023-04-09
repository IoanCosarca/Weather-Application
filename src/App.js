import './App.css';
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
        </div>
    );
}

export default App;
