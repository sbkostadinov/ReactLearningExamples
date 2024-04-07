import { useState } from 'react';
import { Message } from './components/Message';

export const user  = {
  message: '',
};

function App() {

  const [message, setMessage] = useState('Click button for message update');

  

  function handlemessageButton(message){             
    user.message = message;
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
        <Message onClick={ () => handlemessageButton('Hello from State')}>setMessage</Message>
        <p>{message}</p>
      </main>
      
    </div>
  );
}

export default App;
