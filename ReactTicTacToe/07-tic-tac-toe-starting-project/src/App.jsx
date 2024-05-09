

import { useState } from 'react';
import { GameBoard } from './components/GameBoard.jsx';
import { Log } from './components/Log.jsx';
import { Player } from './components/Player.jsx';


export function App() {

  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSq(rowIndex, colIndex) {
    setActivePlayer((curactivePlayer) => curactivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
        let curPlayer = 'X';

        if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
          curPlayer = 'O';
        }
        const updatedTurns = [
          {squarebox: {row: rowIndex, col: colIndex}, player: curPlayer}, 
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