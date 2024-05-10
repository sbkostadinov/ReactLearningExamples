

 /*rowIndex is not related to the data but rather the position of the data so if the position changes rowIndex may be misaligned with the data for row */

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

/*passing state down using SelectSquareProp*/
export default function GameBoard ( {selectSquare, turns } ){

    let gameBoard = initGameBoard;


    /*Iterate over turns array as a means of checking if it is empty*/

    for (const turn of turns) {
        const {squarebox, player} = turn;
        const {row, col}  = squarebox;


        gameBoard[row][col] = player;
     }


    /*const [gameBoard, setGameBoard] =  useState(initGameBoard);

    function handlePSelectSquare(rowIndex, colIndex) { 
        setGameBoard( (prevGameBoard) => {

            const updatetedGBoard = [...prevGameBoard.map( (innerArray) => [...innerArray] )];
            updatetedGBoard[rowIndex][colIndex] = activePlayerSymb;
            return updatetedGBoard;

        });

        selectSquare();
    }
        */

    return ( <ol id="game-board">
        {gameBoard.map( (row, rowIndex) => 
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

