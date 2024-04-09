// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();
import React from 'react';

export default function App() {

  const [value, setValue] = React.useState('$100');

  // TODO see if you can make it so that upon Apply Discount price = price - 25;

  function handleClick(price) {
    
    setValue(price);
    console.log(price);
  }


  return (
    <div>
      <p data-testid="price">{value}</p>
      <button onClick={() => handleClick('$75')}>Apply Discount</button>
    </div>
  )
}