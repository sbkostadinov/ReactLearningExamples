import { useCallback, useRef, useState } from 'react';

import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import { Error } from './components/Error.jsx';
import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';
import { updateUserPlaces } from "./http.js";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [errorUpdPlaces, setErrorUpdPlaces ] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    //await updateUserPlaces([selectedPlace, ...userPlaces]); Can make wbe page look stuck especially if we use a spinner or loding / progress bar

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    // making sure we work with a copy of state as opposed to trying to modify current state to avoid memory access inconsistencies

    try {
    await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
        //..... optimistic update
        setUserPlaces(userPlaces);
        setErrorUpdPlaces({message: error.message || 'Failed to update places'});
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    setModalIsOpen(false);
  }, []);

  function handleErrorUpdPlaces() {
      setErrorUpdPlaces(null);
  }

  return (
    <>

      <Modal open={errorUpdPlaces} onClose={handleErrorUpdPlaces}>
          {errorUpdPlaces && (
           <Error 
              title="An error took place!" 
              message={errorUpdPlaces.message}
              onConfirm={handleErrorUpdPlaces}
            />
          )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
