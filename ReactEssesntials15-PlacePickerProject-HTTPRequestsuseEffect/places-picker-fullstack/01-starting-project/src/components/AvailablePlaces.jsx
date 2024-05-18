
import { useEffect, useState } from 'react';
import { sortPlacesByDistance } from '../loc.js';
import { Error } from './Error.jsx';
import Places from './Places.jsx';

//const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  // TOODO: Fetch available places from backend API
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching ] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect ( ()=> { 
    async function  fetchPlacesData () {
        setIsFetching(true);
        try {
          const response = await fetch('http://localhost:3000/places');
          const resData = await response.json();
          if (!response.ok) {
              throw new Error('Failed to fetch places');
          }

          navigator.geolocation.getCurrentPosition( (position) => {
            const sortedPlaces = sortPlacesByDistance(
              resData.places, position.coords.latitude, position.coords.longitude ); 

            setAvailablePlaces(sortedPlaces); 
            setIsFetching(false);
          });

         }
         catch (error) {
          setError({message: error.message || "Cloud not fetch data for places. Please try again later!"});
          setIsFetching(false);
        }
    }

    fetchPlacesData();
      
  }, []);

  if (error) {
    return  <Error title="An Error took place" message={error.message}/>;
  }



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
