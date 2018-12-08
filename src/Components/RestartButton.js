import React from "react";

const style = {
  border: "none",
  padding: "8px",
  cursor: "pointer",
  "margin-left": "-2.1rem",
  margin: "16px"
};
const restart = props => {
  return (
    <button onClick={props.onClick} style={style}>
      Restart
    </button>
  );
};
export default restart;
