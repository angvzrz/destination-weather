import { useState } from 'react';
import { IWeatherCard } from '../types/types';

interface WeatherCardProps {
  weatherData: IWeatherCard;
}

export function WeatherCard({ weatherData }: WeatherCardProps) {
  const [isIconLoaded, setIsIconLoaded] = useState<boolean>(false);

  const baseUrl = import.meta.env.VITE_API_WEATHER_ICONS_URL;
  const iconUrl = `${baseUrl}${weatherData?.icon}@2x.png`;

  return (
    <article className="flex flex-col items-center justify-center rounded-lg bg-cyan-600 p-7 text-center shadow-sm shadow-slate-600">
      <div className="weather-box">
        <img
          className="inline w-full"
          src={iconUrl}
          onLoad={() => setIsIconLoaded(true)}
        />
        <p className="relative text-3xl font-semibold">{weatherData?.temp}°C</p>
        <p>{weatherData?.description}</p>
      </div>
      <div className="weather-details">
        <div>
          <p>Wind:{weatherData?.wind_speed}</p>
        </div>
        <div>
          <p>Humidity:{weatherData?.humidity}</p>
        </div>
      </div>
    </article>
  );
}
