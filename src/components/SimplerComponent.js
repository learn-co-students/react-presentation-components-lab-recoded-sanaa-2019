// Code SimplerComponent Here
import React, { Component } from "react";
const SimplerComponent = ({ handleClick }) => {
    return (
      <div onClick={handleClick}>
      I am just happy
      </div>
    );
}
export default SimplerComponent;
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={()=>alert('hhhhhhhhh')} />
  </div>,
  document.getElementById('root')
);
