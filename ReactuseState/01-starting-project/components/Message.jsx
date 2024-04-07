

function Message({children, onSelect}) {

    return (

        <div>
            <button onClick={onSelect}>{children}</button>
        </div>

    );
}

export { Message } from './Message';

