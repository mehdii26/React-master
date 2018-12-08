import React, {Component} from "react";
import axios from "../../../axios";
import {Link} from "react-router-dom";
import Post from "../../../Components/Post/Post";
import classes from "./Posts.css";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
      };
    
      componentDidMount() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts") // Can't save this to a variable as its
          // asynchronous. Therefore, we have to use promises.
          // Then is a method that takes a function as an argument that will execute when the GET is complete
          .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
              return {
                ...post,
                author: "Ibrahim"
              };
            });
            this.setState({ posts: updatedPosts });
            // console.log(response.data);
          })
          .catch(error => {
            console.log(error);
            this.setState({ error: true }); // from here you can render an error component
          });
      }
      postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
      };
      
    render(){
        const posts = this.state.posts.map(post => {
            return (
              <Link to={"/"+post.id} key={post.id}><Post
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
              /></Link>
            );
          });
        return (
            <section className={classes.Posts}>{posts}</section>
        )
    }
}

export default Posts;