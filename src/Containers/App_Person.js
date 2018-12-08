import React, { Component, PureComponent } from "react";
// PureComponent has the logic of shouldComponentUpdate already built-in
import "./App_Person.css";
import Person from "../Components/Persons/Person"; // this has to be imported as an uppercase for it to be rendered.
import RestartButton from "../Components/RestartButton";
import EIButton from "../Components/InputButton";

class App extends Component {
  // What we're about to do can be only with classes that EXTENDS components
  constructor(props) {
    // this receives the props this component gets
    super(props); // without this, the props is ONLY in the constructor scope as props.xtz ; now it is accesible throughout the component
    // now we can use props.xyz
    console.log("[App.js] Inside Constructor()", props);
    // We could initialise the state in this method
    // this.state = {
    // bob:"Marley"
  }

  componentWillMount() {
    // try to avoid, discouraged by React 16.3 due to incorrect use (setting state in there)
    console.log("[App.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }
  state = {
    persons: [
      {
        id: "1",
        name: "Bob",
        age: 31
      },
      {
        id: "2",
        name: "Manu",
        age: 21
      },
      {
        id: "3",
        name: "Lucy",
        age: "23"
      }
    ],
    showPersons: false,
    enableInput: false,
    toggleClicked: 0
  };

  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  deletePersonHandler = personIndex => {
    //this has a flaw. we are mutating data
    const persons = this.state.persons.slice(); // slice copies the array OR
    const copiedPersonsSpread = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState((prevState, props) => {
      // User an arrow function that takes the prevState which can then be mutated
      return {
        showPersons: !show,
        // toggleClicked: this.state.toggleClicked +1 // even though this works, it might not always give the correct
        // // output as setState is an ASYNCHRONOUS METHOD done by react
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  restartPersonsHandler = () => {
    this.setState({
      persons: [
        {
          id: "1",
          name: "Bob",
          age: 31
        },
        {
          id: "2",
          name: "Manu",
          age: 21
        },
        {
          id: "3",
          name: "Lucy",
          age: 23
        }
      ]
    });
  };

  enableInputHandler = () => {
    const input = this.state.enableInput;
    this.setState({ enableInput: !input });
  };
  // shouldComponentUpdate(nextProps,nextState){ // Rather than use this logic, we can import from PureComponent
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons!==this.state.showPersons ||
  //   nextState.enableInput !== this.state.enableInput ;
  // // return true
  // }

  render() {
    // this is the only mandatory method, React needs to know what to render
    console.log("[App.js] Inside Render()");
    const style = {
      // styling the hover state is hard using inline styles, one restriction of this method but good for scoping
      // as it you decide which components use this style
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("bold");
    }
    if (this.state.persons.length <= 1) {
      classes.push("red");
    }
    return (
      // This is gets compiled and is equivalent to the next return statement

      //in normal HTML we'd use the word class, but because this is JS we can't do that as its a reserved keyword.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <p className={classes.join(" ")}> So far so good!</p>
        <button
          style={style}
          //  onClick={()=>this.switchNameHandler("SecondWayToPassArguments")}>Switch Name</button> {/*onClick with a capital C as its JSX, miniscule for HTML*/}
          onClick={() => this.togglePersonsHandler()}
        >
          Toggle Persons
        </button>
        {/*We can also send arguments to the event handler and there's two ways to do this:
      1: binding "this" and passing the argument. e.g  <button onClick={this.switchNameHandler.bind(this,"Name Based on this click")} />
      2: Arrow functions as shown above (this is conserved in arrow functions remember?) tends to be less efficient, use bind where possible
  */}
        {this.state.showPersons && (
          <div>
            {" "}
            {/*We'll wrap these in a div so we can show/hide all the content with a click of a button (literally)*/}
            {this.state.persons.map((person, index) => (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} // index is not a good idea (but it can work) as it can change if the array changes
                changed={event => this.nameChangedHandler(event, person.id)}
                enableInput={this.state.enableInput}
              />
            ))}
            {/* We use index so we can find out which index is in the array that way we can delete only the one we clicked on */}
            {(style.backgroundColor = "red")}{" "}
            {/* find out why the string "red" is also shown on the screen*/}
            <RestartButton onClick={() => this.restartPersonsHandler()} />
            <EIButton onClick={() => this.enableInputHandler()} />
          </div>
        )}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!'))// Equivalent to this
    // // takes at least 3 arguments,
    // // first argument box type: component, div, h1, etc etc
    // // second arg is the configuration for this
    // // Third argument is the number of children
    // // As we can see, using JSX can get quite ugly and its easier to use "HTML" Tags
    // // We see from the HTML that we have a className "App" that aligns the text to the center but it isn't being applied, the workaround is:
    // //
  }
}

export default App;
