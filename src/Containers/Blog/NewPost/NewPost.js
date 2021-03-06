import React, {Component} from "react";
import axios from "axios";

class NewPost extends Component {
    state = {
        title :'',
        content: '',
        author: "Ibrahim"
    }

    postDataHandler = ()=>{
        const post = {
            title:this.state.title,
            body: this.state.content,
            author: this.state.author
        }
axios.post("https://jsonplaceholder.typicode.com/posts",post)
.then(response =>{
    console.log(response);
})
    }

    render(){
        return(
            <div>
                <h1> Add a Post</h1>
                <label> Title</label>
                <input type="text" value ={this.state.title} onChange={(event)=> this.setState({title:event.target.value})} />
                <label> Content</label>
<textarea rows="4" value={this.state.content}  onChange={(event)=> this.setState({content:event.target.value})} />
<select value={this.state.author}  onChange={(event)=> this.setState({author:event.target.value})}>
<option value = "Ibrahim"> Ibrahim </option>
<option value = "K"> K </option>
</select>
<button onClick={this.postDataHandler}> Add Post</button>
                </div>
        )
    }
}
export default NewPost