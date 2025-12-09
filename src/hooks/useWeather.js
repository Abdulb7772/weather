import { useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherService";

export default function useWeather() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [unit, setUnit] = useState("metric");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeather = async (city) => {
        try {
            setLoading(true);
            setError("");

            const w = await fetchCurrentWeather(city);
            const f = await fetchForecast(city);

            setWeather(w);

            const filtered = f.list.filter((item) => 
            item.dt_txt.includes("12:00:00")
            );
            setForecast(filtered);
        }catch {
            setError("City not found, Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const toggleUnit = () => {
        setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
    }

    return { weather, forecast, unit, loading, error, getWeather, toggleUnit};
}