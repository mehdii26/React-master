import React from "react";
import {withRouter} from "react-router-dom";
import classes from "./Post.css";


const post = (props)=>(
    <article className={classes.Post} onClick={props.clicked}> 
        <h1>{props.title}</h1>
        <div>
            <div>{props.author}</div>
            </div>
            </article>
);

export default withRouter(post); // This passes the props of the router like match
// isExact, history etc to the post component (another way is to explicitly pass the props down
// to this component)