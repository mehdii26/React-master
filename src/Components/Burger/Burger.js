import React from "react";
import styled from "react-emotion";
import {withRouter} from "react-router-dom"; // this gives children component access to the routing props

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = styled("div")`
  width: 100%;
  margin: auto;
  height: 500px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const burger = props => {
   // logic from object of ingredients to an array of ingredients
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type = {igKey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

if (transformedIngredients.length===0){
    transformedIngredients = <p>Please start adding ingredients!</p>
}
    
    return (
    <Burger className={"Burger"}>
       <BurgerIngredient type="bread-top" />
{transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default withRouter(burger);
// The routing is only available in the parent compoenent, its children
// (including this component does NOT have access to it), Hence why we wrap 
// with "withRouter"