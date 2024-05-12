

 /*rowIndex is not related to the data but rather the position of the data so if the position changes rowIndex may be misaligned with the data for row */

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

/*passing state down using SelectSquareProp*/
export default function GameBoard ( {selectSquare, board } ){


    return ( <ol id="game-board">
        {board.map( (row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymb, colIndex ) => ( 
                <li key={colIndex}>
                    <button onClick={() => selectSquare(rowIndex, colIndex) } disabled={playerSymb !== null}>{playerSymb}</button>
                    </li> 
                ))}
            </ol>
        </li> )}
       </ol>
    )
}

export { GameBoard };

