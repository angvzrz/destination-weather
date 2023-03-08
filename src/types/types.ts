export interface IPlace {
  id: number;
  display: string;
  state: string;
  lat: string;
  long: string;
}

export interface IPlaceWeather {
  place: string;
  temp: number;
  main: string;
  description: string;
  humidity: number;
  wind_speed: number;
  icon: string;
}