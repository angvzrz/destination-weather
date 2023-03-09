import { useState } from 'react';
import { IPlaceWeather } from '../types/types';

interface WeatherSummaryProps {
  placeWeather: IPlaceWeather;
}

export function WeatherSummary({ placeWeather }: WeatherSummaryProps) {
  const [isIconLoaded, setIsIconLoaded] = useState<boolean>(false);

  const description = placeWeather?.description;
  let capitalizedDescription = '';
  if (description) {
    capitalizedDescription =
      description.charAt(0).toUpperCase() + description.slice(1);
  }

  const baseUrl = import.meta.env.VITE_API_WEATHER_ICONS_URL;
  const iconUrl = `${baseUrl}${placeWeather?.icon}@2x.png`;

  return (
    <section className="mt-6 block w-3/4 rounded-md bg-slate-200">
      <h2 className="block w-full bg-slate-700 px-2 py-4 text-xl text-slate-100">
        {placeWeather?.place}
      </h2>
      <div className="mt-2 flex items-center justify-between p-4">
        <div className="">
          <div className="text-4xl">{placeWeather?.temp} °C</div>
          <div className="mt-6">
            <div className="text-2xl">{placeWeather?.main}</div>
            <div className="text-2xl">Humidity: {placeWeather?.humidity}%</div>
            <div className="text-2xl">Wind: {placeWeather?.wind_speed}km/h</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={iconUrl}
            alt={placeWeather?.description}
            onLoad={() => setIsIconLoaded(true)}
          />
          <div className="text-center text-xl">{capitalizedDescription}</div>
        </div>
      </div>
    </section>
  );
}
