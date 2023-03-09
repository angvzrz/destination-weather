import { useEffect, useState } from 'react';
import { getForecastWeather } from '../services/weather-api';
import { IWeatherCard } from '../types/types';
import { WeatherCard } from './weather-card';

interface WeatherWeekProps {
  place: string;
  lat: number;
  lon: number;
}

export function WeatherWeek({ place, lat, lon }: WeatherWeekProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<IWeatherCard[]>([]);

  console.log(lat, lon);

  useEffect(() => {
    getForecastWeather(lat, lon).then((data) => {
      setIsLoaded(true);
      setForecastData(data);
      console.log(place);
    });
  }, [place, lat, lon]);

  return (
    <div className="mx-auto mt-6 block w-11/12 rounded-md bg-slate-100">
      <h2 className="block w-full bg-slate-700 px-2 py-4 text-xl text-slate-100">
        Next 5 days weather for {place}
      </h2>
      <div className="grid grid-flow-col grid-cols-5 grid-rows-1 gap-2 p-6">
        {isLoaded &&
          forecastData.length > 0 &&
          forecastData.map((weatherDay, index) => (
            <WeatherCard key={index} weatherData={weatherDay} />
          ))}
      </div>
    </div>
  );
}
