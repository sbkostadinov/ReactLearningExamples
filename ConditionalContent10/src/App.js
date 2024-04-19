import React from 'react';


// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)
// don't change the Component name "App"
export default function App() {

  const [isdelalert, setisDelAlert] = React.useState(false);

  /*Displaying <div data-testid="alert" id="alert"> using variable  displayContent where JSX code is assigned*/
  let displayContent;

  if (isdelalert){
    displayContent = (
    <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={handleProceedBClick}>Proceed</button>
    </div>);
  }

  function handleProceedBClick() {

    setisDelAlert(false);
  }

  function handleDeleteBClick(){
    
    setisDelAlert(true);

    
  }


  /*If you want to use conditional displaying of <div data-testid="alert" id="alert"> 
  Simply transfer the <div> content under the  if (isdelalert) in place of {displayContent} and add ? or && */

    return (
      <div>
        {displayContent}
        <button onClick={handleDeleteBClick}>Delete</button>
      </div>    
    );
  }