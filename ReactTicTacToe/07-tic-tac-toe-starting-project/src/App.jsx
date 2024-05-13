

import { useState } from 'react';
import { GameBoard } from './components/GameBoard.jsx';
import { GameOver } from './components/GameOver.jsx';
import { Log } from './components/Log.jsx';
import { Player } from './components/Player.jsx';
import { WINNING_COMBINATIONS } from './components/winning-combinations.js';

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  //const [hasWon, setHasWon] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);



  let gameBoard = [...initGameBoard.map(array => [...array])];

  let winner;


    /*Iterate over turns array as a means of checking if it is empty*/

    for (const turn of gameTurns) {
        const {squarebox, player} = turn;
        const {row, col}  = squarebox;


        gameBoard[row][col] = player;
     }

     for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
        // check that symbols for a winning combination are the same i.e X or O only 

        if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol &&
           firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
     }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSq(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
        
        const currentPlayer = deriveActivePlayer(prevTurns);

        const updatedTurns = [
          {squarebox: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
          ...prevTurns];

        return updatedTurns; 
    });
  }

  function resetGameBoard() {
    setGameTurns([]);
    return gameTurns;
  }
  
  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player initialname="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialname="Player 2" symbol="O" isActive={activePlayer === 'O'}/>  
        </ol>
        { (winner || isDraw ) && < GameOver winner={winner} rematch={resetGameBoard}/>}
        <GameBoard  selectSquare={handleSelectSq} board={gameBoard}/>
      </div>
      <Log gameBoardTurns={gameTurns}/>
     </main>
  )
}

export default App;