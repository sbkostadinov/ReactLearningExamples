
// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

//import reactImg from './assets/react-core-concepts.png'

import { CORE_CONCEPTS } from './data.js';

function Header() {
  
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

export { Header };
// function CoreConcept (props)  
// Object destructuring 
/*
function CoreConcept ({image, title, description}) {
  return (
  
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export { CoreConcept };*/ 
function CoreConcept (props) {
  return (
  
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export { CoreConcept };

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts"></section>
        <h2>Time to face myslef starting from the core!</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
           <CoreConcept  {...CORE_CONCEPTS[1]}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[3].title} 
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
           <CoreConcept 
          {...CORE_CONCEPTS[2]}
          />
        </ul>
      </main>
    </div>
  )
}


export default App;
