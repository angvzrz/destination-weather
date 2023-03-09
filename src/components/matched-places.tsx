import { useContext, useEffect, useState } from 'react';
import { PlaceContext } from '../App';
import { IPlace } from '../types/types';

interface MatchedPlacesProps {
  places: IPlace[];
  setInputActive: (value: React.SetStateAction<boolean>) => void;
}

export function MatchedPlaces({ places, setInputActive }: MatchedPlacesProps) {
  const { setPlace, setLat, setLon: setLong } = useContext(PlaceContext);

  const onSelectPlaceItem = (placeItem: IPlace) => {
    setPlace(placeItem.display);
    setLat(parseFloat(placeItem.lat));
    setLong(parseFloat(placeItem.long));
    setInputActive(false);
  };

  return (
    <div className="absolute z-10 mt-2 block w-56 rounded-md shadow-md">
      {places.map((place, index) => (
        <div
          key={index}
          className="block w-full cursor-pointer bg-slate-100 py-3 px-4 hover:bg-sky-800 hover:text-slate-100"
          onMouseDown={(event) => {
            event.preventDefault();
            onSelectPlaceItem(place);
          }}
        >
          {place.display}
        </div>
      ))}
    </div>
  );
}
