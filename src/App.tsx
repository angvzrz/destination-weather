import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { WeatherSummary } from './components/weather-summary';
import { WeatherWeek } from './components/weather-week';
import { getWeather } from './services/weather-api';
import { IPlaceWeather } from './types/types';

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
  const [place, setPlace] = useState<string>('');
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [placeWeather, setPlaceWeather] = useState<IPlaceWeather>();

  useEffect(() => {
    if (place) {
      getWeather(lat, lon);
    }

    return () => setPlace('');
  }, [place]);

  return (
    <PlaceContext.Provider value={{ setPlace, setLat, setLon }}>
      <Header />
      <main className="my-3 flex w-full flex-col items-center justify-center gap-3">
        <WeatherSummary placeWeather={placeWeather!} />
        <WeatherWeek />
      </main>
    </PlaceContext.Provider>
  );
}

export default App;
