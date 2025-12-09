import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import UnitToggle from "./components/UnitToggle";
import Spinner from "./components/Spinner";
import useWeather from "./hooks/useWeather";
import "./index.css";

function App() {
  const { weather, forecast, loading, error, getWeather, unit, toggleUnit } =
    useWeather();

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >

      {/* ===== TOP CARD ===== */}
      <div
        className="p-4 mt-4 rounded-lg shadow-lg w-[90%] max-w-4xl self-center"
        style={{ backgroundColor: "rgba(135, 206, 235, 0.2)" }}
      >
        <div className="flex items-center justify-start gap-3 mb-3">
          <span className="text-2xl">🌤️</span>
          <h1 className="text-black text-2xl font-bold">
            Weather Dashboard
          </h1>
        </div>

        <div className="flex justify-center">
          <SearchForm onSearch={getWeather} />
        </div>

        <div className="flex justify-end mt-3">
          <UnitToggle unit={unit} onToggle={toggleUnit} />
        </div>
      </div>

      {/* ===== CENTER CARD ===== */}
      <div
        className="p-4 mt-2 rounded-lg shadow-lg w-[90%] max-w-4xl self-center flex flex-col gap-9 min-h-[300px]"
        style={{ backgroundColor: "rgba(135, 206, 235, 0.5)" }}
      >
        <div className="flex flex-col items-center justify-center flex-1">
          {loading && <Spinner />}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {!weather && !loading && !error && (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="text-6xl mb-4">📍</div>
              <h2 className="text-3xl font-bold text-black mb-3">Welcome to Weather Dashboard</h2>
              <p className="text-black text-lg mb-2">Search for any city to get real-time weather information and</p>
              <p className="text-black text-lg mb-6">a 5-day forecast.</p>
              <p className="text-black text-sm">🔍 Try searching for "Islamabad", "Lahore", or "Karachi"</p>
            </div>
          )}

          {weather && <CurrentWeather data={weather} unit={unit} />}
          
        </div>
      </div>

{/* ===== BOTTOM  CARD ===== */}
    {weather && forecast && forecast.length > 0 && (
      <div
        className="p-4 mb-8 mt-2 rounded-lg shadow-lg w-[90%] max-w-4xl self-center flex flex-col gap-9"
        style={{ backgroundColor: "rgba(135, 206, 235, 0.5)" }}
      >
        <div className="flex flex-col items-center">
          <Forecast items={forecast} unit={unit} />
          
        </div>
      </div>
    )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
