import axios from 'axios';
import { IPlace } from '../types/types';

export function getPlaces(queryPlace: string): Promise<IPlace[]> {
  const baseUrl = import.meta.env.VITE_API_PLACES_BASE_URL;

  return axios
    .get<IPlace[]>(`${baseUrl}?q=${queryPlace}`)
    .then((response) => {
      const places: IPlace[] = response.data.map((place) => ({
        id: place.id,
        display: place.display,
        state: place.state,
        lat: place.lat,
        long: place.long,
      }));

      return places;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}
