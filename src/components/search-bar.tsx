import { useContext, useEffect, useState } from 'react';
import { PlaceContext } from '../App';
import { getPlaces } from '../services/places-api';
import { IPlace } from '../types/types';
import { MatchedPlaces } from './matched-places';

export function SearchBar() {
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const { setPlace, setLat, setLon: setLong } = useContext(PlaceContext);

  const handleMagnifyIconClick = () => {
    const firsMatchedPlace = places[0];
    setPlace(firsMatchedPlace?.display);
    setLat(parseFloat(firsMatchedPlace?.lat));
    setLong(parseFloat(firsMatchedPlace?.long));
    setIsActive(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setIsActive(true);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (query.trim().length > 0) {
        getPlaces(query).then((places) => {
          const firstPlaces = places.slice(0, 9);
          setPlaces(firstPlaces);
        });
      } else {
        setPlaces([]);
      }
    }, 200);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return (
    <div className="w-full">
      <form className="group relative flex grow items-center">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className=" absolute left-3 top-1/2 -mt-2.5 cursor-pointer text-slate-400 group-focus-within:text-blue-500"
          aria-hidden="true"
          onClick={handleMagnifyIconClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          type="search"
          placeholder="Search destination"
          value={query}
          onChange={(event) => handleInputChange(event)}
          onClick={() => setIsActive(true)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </form>
      {places.length > 0 && query && isActive && (
        <MatchedPlaces places={places} setInputActive={setIsActive} />
      )}
      {places.length === 0 && query && (
        <div className="block w-full cursor-pointer bg-slate-100 py-3 px-4">
          No results found
        </div>
      )}
    </div>
  );
}
