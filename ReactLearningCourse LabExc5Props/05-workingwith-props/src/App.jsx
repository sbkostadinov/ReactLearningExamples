
// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

//import reactImg from './assets/react-core-concepts.png'


export function  CourseGoal(props){
  return (
    <li>
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
          title="Learn React"
          description="In-depth"
        />
        <CourseGoal
          title="Learning React as a gateway into Web Development"
          description="Goal is to learn React so that i can qualify for a front end / full-stack job position"
        />
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      </ul>

    </div>
  ); 
}


export default App;