import { useState } from 'react';
import { Message } from './components/Message';

export const user  = {
  message: '',
};

function App() {

  const [message, setMessage] = useState('Click button for message update');

  
// update current state of message based on which messageButton was selected and reexecute/rerender App component.
  function handlemessageButton(message){             
    //user.message = message;
    setMessage(message);
    console.log(message);
    
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <menu>
          <Message onSelect={ () => handlemessageButton('Hello from React World')}>Introduction Message</Message>
          <Message onSelect={ () => handlemessageButton('Learn and be not afraid')}>Motivational Message </Message>
          <Message onSelect={ () => handlemessageButton('Practice makes perfect')}>Thoughtful Message</Message>
        </menu>
      </main>
      {message}
    </div>
  );
}

export default App;
