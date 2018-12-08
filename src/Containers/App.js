import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
// import styled, { css } from "react-emotion";
import Layout from "../Components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./Checkout/Checkout";
import Orders from "../Containers/Orders/Orders";

// const Header = styled("div")`
//   width: 100%;
//   background-color: green;
//   height: 50px;
//   position: fixed;
//   z-index: 2;
//   top: 50px;
//   left: 0;
//   border-bottom: 1px solid black;
// `;
// const containerStyles = css`
//     display: flex; v
//     flex-direction: column;
//     width: 100%;
//     height: 5rem;
//     justify-content: space-between;
// `;



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
