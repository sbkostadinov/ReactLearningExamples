import { useState } from 'react';

export default function Player ( {initialname, symbol} ) {
    
    const [isEdit, setIsEdit] = useState(false);
    const [playerName , setPlayerName] = useState(initialname); 

    function handleEditClick() {
        setIsEdit((editing) => (!editing) );
    }

    function handleInpChange(event) {

      console.log(event);
      setPlayerName(event.target.value);


    }

    let displayPlayer = <span className="player-name">{playerName}</span>;

    if(isEdit) {
        displayPlayer = <input type="text" required value={playerName} onChange={handleInpChange}></input>;
       
    } 

    return (
      <li>
        <span className="player">
          {displayPlayer}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>{isEdit? 'Save': 'Edit'}</button> 
        </span>
       </li>
    );
}

export { Player };
