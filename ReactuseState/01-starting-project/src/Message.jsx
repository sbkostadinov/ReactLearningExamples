

function Message({children, onSelectButton}) {

    return (

        <div>
            <li>
                <button onClick={onSelectButton}>{children}</button>
            </li>
        </div>

    );
}

export { Message } from './Message';

