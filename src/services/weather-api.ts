import { IPlaceWeather } from '../types/types';

export function getWeather(
  lat: number,
  long: number
): Promise<IPlaceWeather> | void {}
