import { useContext, useState } from 'react';
import { PlaceContext } from '../App';
import { IPlace } from '../types/types';

interface MatchedPlacesProps {
  places: IPlace[];
  isInputActive: boolean;
}

export function MatchedPlaces({ places }: MatchedPlacesProps) {
  const [display, setDisplay] = useState(true);
  const { setPlace, setLat, setLong } = useContext(PlaceContext);

  const onSelectPlaceItem = (placeItem: IPlace) => {
    setDisplay((prevValue) => !prevValue);
    setPlace(placeItem.display);
    setLat(parseFloat(placeItem.lat));
    setLong(parseFloat(placeItem.long));
  };

  return (
    <div className="absolute z-10 mt-2 block w-56 rounded-md shadow-md ">
      {display &&
        places.map((place, index) => (
          <div
            key={index}
            className="block w-full cursor-pointer bg-slate-100 py-3 px-4 hover:bg-sky-800 hover:text-slate-100"
            onClick={(event) => {
              event.stopPropagation();
              onSelectPlaceItem(place);
            }}
          >
            {place.display}
          </div>
        ))}
    </div>
  );
}
