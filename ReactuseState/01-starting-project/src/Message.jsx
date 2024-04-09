

export default function Message({children, onButtonSelect}) {

    return (

        <div>
            <li>
                <button onClick={onButtonSelect}>{children}</button>
            </li>
        </div>

    );
}

export { Message } from './Message';

