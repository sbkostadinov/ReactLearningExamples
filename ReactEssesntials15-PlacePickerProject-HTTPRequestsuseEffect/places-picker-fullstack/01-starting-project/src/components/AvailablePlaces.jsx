
import { useEffect, useState } from 'react';
import Places from './Places.jsx';

//const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  // TOODO: Fetch available places from backend API
  const [availablePlaces, setAvailablePlaces] = useState([]);

  

  useEffect ( ()=> { 

    async function  fetchPlacesData () {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();
        setAvailablePlaces(resData.places);
    }

    fetchPlacesData();
      
  }, []);



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
