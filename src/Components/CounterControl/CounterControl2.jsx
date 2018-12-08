import React from "react";
import classes from "./CounterControl2.css";

const counterControl2 = props => (
  <div className={classes.CounterControl2} onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl2;
