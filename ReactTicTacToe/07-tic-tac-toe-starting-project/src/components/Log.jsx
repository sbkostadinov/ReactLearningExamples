

export default function Log ({ gameBoardTurns }){

    return (
        <ol id='log'>
            {gameBoardTurns.map((turn) => (
            <li key={`${turn.squarebox.row}${turn.squarebox.col}`}>
                {turn.player} selected {turn.squarebox.row}, {turn.squarebox.col}
                </li>))}
        </ol>
    );
}

export { Log };
