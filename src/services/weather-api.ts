import axios from 'axios';
import { I5DayForecast, IPlaceWeather, IWeatherCard } from '../types/types';

export function getWeather(lat: number, lon: number): Promise<IPlaceWeather> {
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

      return {
        place: '',
        temp: 0,
        main: '',
        description: '',
        humidity: 0,
        wind_speed: 0,
        icon: '',
      };
    });
}

export function getForecastWeather(
  lat: number,
  lon: number
): Promise<IWeatherCard[]> {
  const baseUrl: string = import.meta.env.VITE_API_WEATHER_FORECAST_URL;
  const apiKey: string = import.meta.env.VITE_API_WEATHER_KEY;
  const urlRequest = `${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  return axios
    .get(urlRequest)
    .then((response) => {
      const forecastData: I5DayForecast[] = response?.data?.list;

      // start populating at the middle day of the first day
      // and then add the data of the middle day of the next day successively
      const cardsWeekForecast: IWeatherCard[] = forecastData
        .filter(
          (_, index) => index === 3 || (index > 3 && (index - 3) % 8 === 0)
        )
        .map((day) => ({
          temp: day.main.temp,
          description: day.weather[0].main,
          humidity: day.main.humidity,
          wind_speed: day.wind.speed,
          icon: day.weather[0].icon,
        }));

      return cardsWeekForecast;
    })
    .catch((error) => {
      console.error(error);

      return [];
    });
}
