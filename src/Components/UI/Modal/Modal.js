import React from "react";
import classes from "./Modal.css";
import Auxi from "../../../hoc/Auxi";
import Backdrop from "../Backdrop/backdrop";

const modal = props => (
// This should be a class component as it unnecessarily
// gets render every time even though the modal is not 
// being used. Use this method for optimisation:
// shouldComponentUpdate(nextProps,nextState){
// return nextProps.show !== this.props.show
// }
// If you have a spinner in place this won't work, you'll have to do:
// shouldComponentUpdate(nextProps,nextState){
  // return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  // }


    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    {props.children}
  </div>
  </Auxi>
);

export default modal;
