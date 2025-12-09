export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="text-6xl mb-4">🌤️</div>
      <p className="text-blue-900 text-lg mb-4">Fetching weather data...</p>
      <div className="flex gap-2">
        <div className="h-3 w-3 bg-blue-800 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="h-3 w-3 bg-blue-800 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-3 w-3 bg-blue-800 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
