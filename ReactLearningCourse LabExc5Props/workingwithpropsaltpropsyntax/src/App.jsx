
// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

//import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data.js';


export function  CourseGoal(props){
  return (
    <li>
      < img src={props.image} alt={props.title}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}



function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>                                                                                                     
      <p>One course, many different goals!</p>
      <ul>
        <CourseGoal
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
        />
        <CourseGoal
          {...CORE_CONCEPTS[1]} />
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      </ul>

    </div>
  ); 
}


export default App;