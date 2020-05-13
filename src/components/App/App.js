import React, { Component } from "react";

//!Event Handling//

/* function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/400/200" />
      <br />
      <br />
      <button
        onClick={() => console.log("I was clicked")}
        onMouseMove={() => console.log("Ola")}
      >
        Ola
      </button>
    </div>
  );
}
 */

/* class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let loggedIn;
    if (this.state.isLoggedIn === true) {
      loggedIn = "In";
    } else {
      loggedIn = "Off";
    }
    return (
      <div>
        <h1>You are currently logged {loggedIn}</h1>
      </div>
    );
  }
}
 */
//!!States */
/* class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ricardo",
      age: "39",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
} */

//**Class */
/* class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Ricardo" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;

    const styles = {
      fontSize: 30,
    };
    if (hours < 12) {
      timeofDay = "Morning";
      styles.color = "green";
    } else if (hours >= 12 && hours < 18) {
      timeofDay = "Afternoon";
      styles.backgroundColor = "Red";
    } else {
      timeofDay = "Night";
    }
    return <h1 style={styles}>Good {timeofDay}</h1>;
  }
}
 */

//**TodoApp *//
/*
import TodoItem from "../TodoItem/TodoItem";
import todosData from "../../todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          //todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        //todos: updatedTodos,
      };
    });
  }
  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} item={todo} handleChange={this.handleChange} />
    ));
    return <div>{todoComponents}</div>;
  }
}
/*

//**Get the hours 
/* 
function App() {
  const date = new Date(2020, 4, 29, 14);
  const hours = date.getHours();
  let timeofDay;

  const styles = {
    fontSize: 30,
  };
  if (hours < 12) {
    timeofDay = "Morning";
    styles.color = "green";
  } else if (hours >= 12 && hours < 18) {
    timeofDay = "Afternoon";
    styles.backgroundColor = "Red";
  } else {
    timeofDay = "Night";
  }
  return <h1 style={styles}>Good {timeofDay}</h1>;
} */

//*Map*//

/* import Product from "../Product/Product";
import things from "../../things";

function App() {
  const productComponents = things.map((thing) => (
    <Product key={thing.id} product={thing} />
  ));

  return <div>{productComponents}</div>;
}




/* import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer"; */
//import Contacts from "../Contacts/Contacts";

/* function App() {
  return (
    <div>
      <Contacts
        contact={{
          name: "Bigodaças",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212)46456",
          email: "bigodes@whiskas.com",
        }}
        test={{ first: "me" }}
      />
      <Contacts
        contact={{
          name: "Bigodaças",
          imgUrl: "http://placekitten.com/100/200",
          phone: "(212)46456",
          email: "bigodes@whiskas.com",
        }}
        test={{ first: "me" }}
      />
      <Contacts
        contact={{
          name: "Bigodaças",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(212)46456",
          email: "bigodes@whiskas.com",
        }}
        test={{ first: "me" }}
      />
      <Contacts
        contact={{
          name: "Bigodaças",
          imgUrl: "http://placekitten.com/300/300",
          phone: "(212)46456",
          email: "bigodes@whiskas.com",
        }}
        test={{ first: "me" }}
      />
    </div>
  );
} */

//!!State
/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Hit me up</button>
      </div>
    );
  }
}
 */

/* class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      counts: 0,
      result: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
    this.multiplyClick = this.multiplyClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 2,
      };
    });
  }

  handleClicks() {
    this.setState((prevState) => {
      return {
        counts: prevState.counts - 2,
      };
    });
  }

  multiplyClick() {
    this.setState((prevState) => {
      return {
        result: prevState.count * prevState.counts,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1> <h1>{this.state.counts}</h1>{" "}
        <h1>{this.state.result}</h1>
        <button onClick={this.handleClick}>Add me up</button>
        <button onClick={this.multiplyClick}>Multiply both</button>
        <button onClick={this.handleClicks}>Add me down</button>
      </div>
    );
  }
} */

//!!life Cycle Methods
/*
 class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //get the data I need to correctly display
  }

  /* componentWillReceiveProps(nextProps) {}
  render() {
    return <div>Code Goes Here</div>;
   }*/
/*
  shouldComponentUpdate(nextProps,nextState){
    //return true if want it to update
    //return false if not
  }

  componentWillUnmount(){
    //remove event listeners
    //teardown or clean up your code before your component disappears
  }
  static getDerivedStateFromProps(props, state){
 //return the new, update state based upon the props
  }

  getSnapshotBeforeUpdate(){
    //create a backup of the current way things are
  }
}
*/

//!! Conditional Rendering

import Conditional from "../Condtional/Conditional";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>{this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}</div>
    );
  }
}

export default App;
