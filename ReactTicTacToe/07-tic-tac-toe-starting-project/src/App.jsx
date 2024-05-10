

import { useState } from 'react';
import { GameBoard } from './components/GameBoard.jsx';
import { Log } from './components/Log.jsx';
import { Player } from './components/Player.jsx';

// creatubg helper function 

function deriveActivePlayer(gameTurns) {

    let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}

export function App() {


  //const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSq(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
        
        const currentPlayer = deriveActivePlayer(prevTurns);

        const updatedTurns = [
          {squarebox: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
          ...prevTurns];


        return updatedTurns; 
    });

  }
  
  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player initialname="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialname="Player 2" symbol="O" isActive={activePlayer === 'O'}/>  
        </ol>
        <GameBoard  selectSquare={handleSelectSq} turns={gameTurns}/>
      </div>
      <Log gameBoardTurns={gameTurns}/>
     </main>
  )
}

export default App;