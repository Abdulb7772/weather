export default function Forecast({ items, unit }) {
  if (!items || !items.length) return null;

  const convertTemp = (temp) => {
    return unit === "metric" ? temp : (temp * 9) / 5 + 32;
  };

  return (
    <div className="w-full">
      <h3 className="text-black text-sm font-semibold mb-4 uppercase tracking-wide">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {items.map((day) => (
          <div 
            key={day.dt} 
            className="bg-blue-600/50 backdrop-blur-lg rounded-2xl p-4 w-full items-center justify-center text-center hover:bg-blue-700/50 transition-colors"
          >
            <p className="text-black text-sm font-medium mb-3">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-16 h-16 mb-2"
            />
            <p className="text-black text-xs capitalize mb-3">{day.weather[0].description}</p>
            <div className="flex items-start gap-1">
              <span className="text-black text-2xl font-bold">{Math.round(convertTemp(day.main.temp))}°</span>
              <span className="text-black text-sm mt-1">{Math.round(convertTemp(day.main.temp_min))}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
