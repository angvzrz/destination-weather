import axios from 'axios';
import { IPlaceWeather } from '../types/types';

export function getWeather(
  lat: number,
  lon: number
): Promise<IPlaceWeather | {}> {
  const baseUrl: string = import.meta.env.VITE_API_WEATHER_BASE_URL;
  const apiKey: string = import.meta.env.VITE_API_WEATHER_KEY;
  const urlRequest = `${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  return axios
    .get(urlRequest)
    .then((response) => {
      const weatherData = response.data;
      const mainWeather: IPlaceWeather = {
        place: weatherData.name,
        temp: weatherData.main.temp,
        main: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        humidity: weatherData.main.humidity,
        wind_speed: weatherData.wind.speed,
        icon: weatherData.weather[0].icon,
      };

      return mainWeather;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}
