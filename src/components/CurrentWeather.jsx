import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CurrentWeather({ data, unit }) {
    if(!data) return null;

    const temp =
    unit === "metric" ? data.main.temp : (data.main.temp * 9) /5 + 32;
    const feelsLike =
    unit === "metric" ? data.main.feels_like : (data.main.feels_like * 9) /5 + 32;

    return (
        <div className="w-full mt-8  rounded-3xl p-8 text-black ">
            <p className="text-sm text-black mb-2">CURRENT WEATHER</p>
            <h2 className="text-3xl font-bold mb-1">{data.name}, {data.sys.country}</h2>
            <p className="text-black capitalize mb-6">{data.weather[0].description}</p>

            <div className="flex items-start justify-between">
                <div className="flex items-start">
                    <span className="text-8xl font-light">{Math.round(temp)}</span>
                    <span className="text-4xl font-light mt-2">°{unit === "metric" ? "C" : "F"}</span>
                </div>
                
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    alt={data.weather[0].description}
                    className="w-32 h-32 -mt-4"
                />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-black">
                <div className="flex flex-col items-center">
                    <span className="text-sm text-black mb-1">🌡️ FEELS LIKE</span>
                    <span className="text-2xl font-semibold">{Math.round(feelsLike)}°{unit === "metric" ? "C" : "F"}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-black mb-1">💧 HUMIDITY</span>
                    <span className="text-2xl font-semibold">{data.main.humidity}%</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-black mb-1">💨 WIND</span>
                    <span className="text-2xl font-semibold">{data.wind.speed} km/h</span>
                </div>
            </div>
        </div>
    )
}