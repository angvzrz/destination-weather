import { WeatherCard } from './weather-card';

export function WeatherWeek() {
  return (
    <div className="block bg-slate-100 m-auto w-11/12">
      <h2 className="block w-full bg-slate-700 px-2 py-4 text-xl text-slate-100">
        Next 7 days weather
      </h2>
      <ul className="grid grid-flow-col grid-cols-7 grid-rows-1 gap-2 p-6">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ul>
    </div>
  );
}
