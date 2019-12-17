// Code SimplerComponent Here
import React from "react";
const SimplerComponent = ({ handleClick }) => {

  return( <div onClick={handleClick}>I am just happy</div>)
 // handleClick is changed at index.js => it is passed as a callback prop
}

export default SimplerComponent;


