export default function UnitToggle({ unit, onToggle }) {
  
  return (
    <div className="items-center gap-2 rounded-full p-2 right-1 top-2">
      <button
        onClick={() => unit !== "metric" && onToggle()}
        className={`place-content-center h-9 w-10 rounded-2xl text-white font-bold px-4 py-1.5 transition-colors ${
          unit === "metric" 
            ? "bg-blue-800" 
            : "bg-cyan-700 hover:bg-blue-800"
        }`}
        style={{ outline: 'none', border: 'none' }}
      >
        °C
      </button>
      <button 
        onClick={() => unit !== "imperial" && onToggle()}
        className={`place-content-centerh-9 w-10 text-white font-bold rounded-2xl px-4 py-1.5 transition-colors ${
          unit === "imperial" 
            ? "bg-blue-800" 
            : "bg-cyan-700 hover:bg-blue-800"
        }`}
        style={{ outline: 'none', border: 'none' }}
      >
        °F
      </button>
    </div>
  );
}
