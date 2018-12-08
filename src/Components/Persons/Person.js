// We can use classes to create components, and we have to for handling the state, however
// most of the time we should use a JS function, because at its simplest form, a component
// is just a function that returns some JSX.

// There's two ways to style components:
// 
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Person/Person.css'; // file extension must be included... file extensions can only be omitted for JS files


class Person extends Component {
    constructor(props){
        super(props);
    console.log('[Person.js] Inside Constructor()', props)
    this.inputElement= React.createRef();
// We could initialise the state in this method
// this.state = {
  // bob:"Marley"
    }
  
  componentWillMount() { /// try to avoid, discouraged by React 16.3 due to incorrect use (setting state in there)
    console.log('[Person.js] Inside componentWillMount()')
  }
  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()')
   {this.props.enableInput&&  this.inputElement.current.focus()} // focus method not working? should make input text blue to highlight where you are
  }

  componentWillReceiveProps(nextProps){ // try to avoid, discouraged by React 16.3 due to incorrect use (setting state in there)
      console.log('[UPDATE Person.js ] Inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE Person.js ] Inside shouldComponentUpdate', nextProps,this.props)
// return nextProps.name !== this.props.name;
return true
  }

  componentWillUpdate(nextProps,nextState){ // try to avoid, discouraged by React 16.3 due to incorrect use (setting state in there)
    console.log('[UPDATE Person.js ] Inside componentWillUpdate', nextProps)
  }

  componentDidUpdate(){
    console.log('[UPDATE Person.js ] Inside componentDidUpdate')

  }

    render(){
        console.log('[Person.js] Inside Render()')
      return (
            <div className="Person">
        
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                {/* Children are a special property given to us by react which is the text in between the <> </> tags that are passed into this component */}
               <p> {this.props.children}</p> 
            {this.props.enableInput&& 
            <input 
            // this is only available in stateful classes, inputElement will be a new property on the class, created when render runs
            // ref = {(inp)=>{this.inputElement = inp}} // this focuses the current inputBox, ref special property known to react which should take a function
         ref={this.inputElement}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>} {/*two way binding*/}
               {/*onChange will be fired whenever the value of the input changes*/}
                </div>
            )
    }
}
    
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func 
}

export default Person;