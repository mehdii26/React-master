import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../Components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault(); // prevent default which is to reload the page
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Ibrahim",
        address: {
          street: "TestStreet 1",
          zipCode: "41351",
          country: "UK"
        },
        email: "kirk@test.com"
      },
      deliveryMethod: "drone"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your e-mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postcode"
          placeholder="Post Code"
        />
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4> Enter your Contact Details </h4>
        {form}
        <Button btnType="Success" clicked={this.orderHandler}>
          {" "}
          ORDER
        </Button>
      </div>
    );
  }
}

export default ContactData;
