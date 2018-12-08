import React from "react";
import classes from "./backdrop.css";

// This where you can click on the background and close things like tabs/modal
const backdrop = (props)=> (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop