// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';

import './styles.css';

export default function App() {

    const [enteredValue, setEnteredValue] = React.useState('');

    function handleOnChange(event) {
      
      /* Alternative approach
      const [enteredValue, setEnteredValue] = React.useState('Invalid');

    function handleOnChange(event) {
      
      const value = event.target.value;
      
     
      
      if( value.trim().length < 3) {
        setEnteredValue('Invalid')
      }
      else { 
        setEnteredValue('Valid');
      }

      
    }

    return (
          <form>
              <label> Your message </label>
              <input type="text" onChange={handleOnChange}/>
              <p>{enteredValue} message</p>
          </form>
      );
      }
      */

      setEnteredValue(event.target.value);

    }

    return (
        <form>
            <label> Your message </label>
            <input type="text" onChange={handleOnChange} value={enteredValue}/>
            <p>{enteredValue.trim().length < 3 ?  "Invalid" : "Valid"} message</p>
        </form>
    );
}