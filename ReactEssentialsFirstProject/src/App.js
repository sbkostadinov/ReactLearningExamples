import React from 'react';

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

function MainGoal() {
  
  return (
    <div>
      <h1>Main Goal with React</h1>
      <p>My main goal: Learn React as a gateway venture into WebDevelopment for good </p>
      <p>Next Go into SpringBoot</p>
      <p>Finally make my way to the Backend and become a FullStack Developer</p>
      <hr />
      <p>The HTML attribute   <code>button</code> will output a clickable button</p>
      <hr />
      <input type="radio" id="css" name="clickable circle" value="CSS"></input>
      <label for="css">Radio Button</label><br></br>
      <input type="radio" id="javascript" name="Java on the Radio" value="JavaScript"></input>
      <label for="javascript">JS on the Radio</label><br></br>
    </div>


  )
  
}

export { MainGoal };

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
      <MainGoal></MainGoal>
    </div>
  );
}

export default App;
