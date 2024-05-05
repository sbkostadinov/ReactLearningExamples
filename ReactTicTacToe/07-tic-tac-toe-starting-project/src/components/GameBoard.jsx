
 /*rowIndex is not related to the data but rather the position of the data so if the position changes rowIndex may be misaligned with the data for row */

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard (){
    return ( <ol id="game-board">
        {initGameBoard.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymb, colIndex ) => <li key={colIndex}>
                    <button>{playerSymb}</button>
                    </li> )}
            </ol>
        </li> )}
       </ol>
    )
}

export { GameBoard };

