import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import UnitToggle from "./components/UnitToggle";
import Spinner from "./components/Spinner";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, forecast, loading, error, getWeather, unit, toggleUnit } =
    useWeather();

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-100 to-indigo-200">
        <UnitToggle unit={unit} onToggle={toggleUnit} />
      <div className="min-h-screen bg-blue-100/80 backdrop-blur-sm flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
        
        <SearchForm onSearch={getWeather} />

        {loading && <Spinner />}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <CurrentWeather data={weather} unit={unit} />
        
        <Forecast items={forecast} />
      </div>
    </div>
  );
}

export default App;
