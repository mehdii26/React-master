import React from 'react';
const style = {
    border: "none",
    padding: "8px",
    cursor: "pointer",
  };
const input = (props) =>{
    return (
        <button onClick={props.onClick} style={style}>
        Enable/Disable Input
      </button>
)}

export default input;