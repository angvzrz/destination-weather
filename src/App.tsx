import { createContext, useEffect, useState } from 'react';
import { Header } from './components/header';
import { WeatherSummary } from './components/weather-summary';
import { WeatherWeek } from './components/weather-week';
import { getWeather } from './services/weather-api';
import { IPlaceWeather } from './types/types';
import './App.css';

interface IAppContext {
  setPlace: (place: string) => void;
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
}
export const PlaceContext = createContext<IAppContext>({
  setPlace: () => {},
  setLat: () => {},
  setLon: () => {},
});

function App() {
  const mexicoCityLat = 19.4326077;
  const mexicoCityLon = -99.133208;
  const [place, setPlace] = useState<string>('Mexico City');
  const [lat, setLat] = useState<number>(mexicoCityLat);
  const [lon, setLon] = useState<number>(mexicoCityLon);
  const [placeWeather, setPlaceWeather] = useState<IPlaceWeather>();

  useEffect(() => {
    if (place) {
      getWeather(lat, lon).then((weatherData) => setPlaceWeather(weatherData));
    }
  }, [place]);

  return (
    <PlaceContext.Provider value={{ setPlace, setLat, setLon }}>
      <Header />
      <main className="my-3 flex w-full flex-col items-center justify-center gap-3">
        <WeatherSummary placeWeather={placeWeather!} />
        <WeatherWeek place={place} lat={lat} lon={lon} />
      </main>
    </PlaceContext.Provider>
  );
}

export default App;
