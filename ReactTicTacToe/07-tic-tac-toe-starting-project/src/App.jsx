

import { GameBoard } from './components/GameBoard.jsx';
import { Player } from './components/Player.jsx';

export function App() {
  
  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players">
          <Player initialname="Player 1" symbol="X"/>
          <Player initialname="Player 2" symbol="O"/>  
        </ol>
        <GameBoard />
      </div>
      LOG 
     </main>
  )
}

export default App;