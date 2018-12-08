import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Blog from "./Blog/Blog";

class AppPosts extends Component {
    render(){
        return(
            <BrowserRouter>
            <Blog />
            </BrowserRouter>
        )
    }
}

export default AppPosts