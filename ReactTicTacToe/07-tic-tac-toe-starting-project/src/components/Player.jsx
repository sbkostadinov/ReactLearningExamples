import { useState } from 'react';

export default function Player ( {name, symbol} ) {
    
    const [isEdit, setIsEdit] = useState(false);

    function handleEditClick() {
        setIsEdit((editing) => (!editing) );
    }

    let displayPlayer = <span className="player-name">{name}</span>;

    if(isEdit) {
        displayPlayer = <input type="text" required></input>;
       
    } 

    return (
      <li>
        <span className="player">
          {displayPlayer}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>Edit</button> 
        </span>
       </li>
    );
}

export { Player };
