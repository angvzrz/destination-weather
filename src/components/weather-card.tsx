export function WeatherCard() {
  return (
    <article className="rounded-lg bg-slate-100 p-7 shadow-sm shadow-slate-600">
      <div className="weather-box">
        <img  className="w-4/6 mt-8"/>
        <p className="relative text-3xl font-semibold">20°C</p>
      </div>
      <div className="weather-details">
        <div>
          <p>Precipitation</p>
        </div>
        <div>
          <p>Humidity</p>
        </div>
      </div>
    </article>
  );
}
