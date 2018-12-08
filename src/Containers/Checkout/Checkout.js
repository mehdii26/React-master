import React, {Component} from "react";
import {Route} from "react-router-dom";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
state={
    ingredients: null,
    price: 0
}
componentWillMount (){
    // Takes data from the URL
    const query = new URLSearchParams(this.props.location.search);
const ingredients = {};
let price =0 ;
for (let param of query.entries()){
    if (param[0]==="price"){
price = param[1];
    }
    else {
           // ["salad","1"], so transform the array to an object
    ingredients[param[0]]= +param[1]
    }
 
}
this.setState({ingredients:ingredients, price: price});
}

checkoutCancelledHandler = ()=>{
this.props.history.goBack();
}
checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
}
    render(){
return (
 
    <div>
        <CheckoutSummary ingredients={this.state.ingredients}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinue={this.checkoutContinuedHandler}/>
{/* <Route path={this.props.match.path + "/contact-data"} component={ContactData}/> */}
{/* Use the render method to pass props to components */}
<Route path={this.props.match.path + "/contact-data"} render={(props)=><ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>}/>
        </div>
)
    }
}

export default Checkout;