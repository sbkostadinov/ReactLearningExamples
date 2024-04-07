import { useState } from 'react';
import { Message } from './Message';
 

function App() {

  const [message, setMessage] = useState('Click button for message update');

  
// update current state of message based on which messageButton was selected and reexecute/rerender App component.
// handlemessageButton => Introduction Message, Motivational Message ,Thoughtful Message 
  function handlemessageButton(message){             
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
        < section id="examples">
          <h2>Time to get started!</h2>
          <menu>
              < Message onSelectButton={ () => handlemessageButton('Hello from React World')}> Introduction Message </Message>
              < Message onSelectButton={ () => handlemessageButton('Learn and be not afraid')}> Motivational Message </Message>
              < Message onSelectButton={ () => handlemessageButton('Practice makes perfect')}> Thoughtful Message </Message>
          </menu>
          {message}
        </section>
      </main>
    </div>
  );
}

export default App;
