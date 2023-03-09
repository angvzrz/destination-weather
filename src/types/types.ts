export interface IPlace {
  id: number;
  display: string;
  state: string;
  lat: string;
  long: string;
}

export interface IPlaceWeather {
  place?: string;
  temp: number;
  main: string;
  description: string;
  humidity: number;
  wind_speed: number;
  icon: string;
}

export interface IWeatherCard extends Omit<IPlaceWeather, 'main'> {}

export interface I5DayForecast {
  main: { humidity: number; temp: number };
  weather: { main: string; icon: string }[];
  wind: { speed: number };
}
