import React from "react";
import styled from "react-emotion";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css"

const BuildControls = styled("div")`
width: 100%;
background-color: #CF8F2E;
display:flex;
flex-flow:column;
align-items:center;
box-shadow: 0 2px 1px #ccc;
margin:auto;
padding: 10px 0;
`;

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Lamb', type: 'lamb'},
];

const buildControls = (props) => (
<BuildControls>
    <p>Current Price: £<strong>{props.price.toFixed(2)}</strong></p>
{controls.map( ctrl => (
    <BuildControl 
    key={ctrl.label}
    label={ctrl.label}
    added = {()=>props.ingredientAdded(ctrl.type)}
    removed = {()=>props.ingredientRemoved(ctrl.type)}
    disabled={props.disabled[ctrl.type]}
    />
))}
<button 
className={classes.OrderButton}
disabled={!props.purchaseable}
onClick={props.ordered}>
ORDER NOW</button>
    </BuildControls>
);

export default buildControls