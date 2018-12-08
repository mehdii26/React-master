import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.99,
  meat: 1.5,
  lamb: 1.19
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 3,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount(){
    axios.get("https://react-my-burger-85e1b.firebaseio.com/ingredients.json")
    .then(response=>{
this.setState({ingredients:response.data})
    })
    .catch(error=>{}); // Add some logic to display to user if there's an error
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceReduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // this.setState({ loading: true });

    // // alert("You continue!")
    // // you need to use .json for appropriate endpoint in firebase
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Ibrahim",
    //     address: {
    //       street: "TestStreet 1",
    //       zipCode: "41351",
    //       country: "UK"
    //     },
    //     email: "kirk@test.com"
    //   },
    //   deliveryMethod: "drone"
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then(response => this.setState({ loading: false, purchasing: false }))
    //   .catch(error => this.setState({ loading: false, purchasing: false }));
  
    // this.props.history.push("/checkout");
   const queryParams = [];
   for(let i in this.state.ingredients){
     // JS method
     queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i])); 
   }

   queryParams.push('price=' + this.state.totalPrice);
   const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Spinner />
    if (this.state.ingredients){ // dynamic rendering of igredients through the backend
      // if we are here its because we have fetched data from the backend, if not,
      // a spinner will appear
      burger =  (<Auxi><Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchasable}
          ordered={this.purchaseHandler}
        /></Auxi>);
        orderSummary = (
          /*There's somme animation already present defined in the css file*/
          <OrderSummary
            ingredients={this.state.ingredients}
            success={this.purchaseContinueHandler}
            danger={this.purchaseCancelHandler}
            price={this.state.totalPrice}
          />
        );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxi>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
       {burger}
      </Auxi>
    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);
