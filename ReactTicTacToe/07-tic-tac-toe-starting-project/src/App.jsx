

import { useState } from 'react';
import { GameBoard } from './components/GameBoard.jsx';
import { Player } from './components/Player.jsx';


export function App() {

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSq() {
    setActivePlayer((curactivePlayer) => curactivePlayer === 'X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player initialname="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialname="Player 2" symbol="O" isActive={activePlayer === 'O'}/>  
        </ol>
        <GameBoard  selectSquare={handleSelectSq} activePlayerSymb={activePlayer}/>
      </div>
      LOG 
     </main>
  )
}

export default App;