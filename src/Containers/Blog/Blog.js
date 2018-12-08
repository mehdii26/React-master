import React, { Component } from "react";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
// import axios from "axios"; // axios for get requests in React
import classes from "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
// import axiosInstance from "../../axios"; // You can use this with different config settings
// axiosInstance.get("https://example.com").then(response=>{console.log(response)})

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li> This wont reload or be able to style*/}
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
              {/* anchor tags will reload*/}
            </ul>
          </nav>
        </header>

        {/* exact is a boolean, without it all links will resolve as the path specified*/}
        {/* <Route path="/" exact render={()=><Posts /> } />  */}
        {/* Rendering components is better the following way: */}
        {/* However this makes the page re-load (lose state) every time which is rarely what we want */}
        <Switch> {/*One route gets loaded only in the switch so order matters in the switch*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
        <Redirect from ="/here" to = "/thenHere" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
