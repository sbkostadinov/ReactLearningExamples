import React from 'react';
import { Review } from './components/Review';

// don't change the Component name "App"
function App() {

  const [isStudentName, setStudentName] = React.useState('');
  const [isFeedback, setFeedback] = React.useState('');

  function handleChange (event){
    setStudentName(event.target.value);
  }


  function handleChangeFeedback(event){
    setFeedback(event.target.value);
  }
  
  
  
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea  onChange={handleChangeFeedback} value={isFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChange} value={isStudentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        <Review feedback={isFeedback} student={isStudentName} />
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;