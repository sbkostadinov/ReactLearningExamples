

function Message({message, setMessage}) {

    return (

        <div>
            <button onClick={setMessage}>{message}</button>
            <h1>{message}</h1>
        </div>

    );
}

export { Message } from './Message';
