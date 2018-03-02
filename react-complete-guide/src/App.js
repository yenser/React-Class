import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Jens', age: 21},
      {name: 'Miranda', age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DONT DO THIS this.state.persons[0].name = "Jens Streck";
    this.setState({persons: [
        {name: newName, age: 21},
        {name: 'Miranda', age: 22}
      ],
      otherState: 'some other value'
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Jens Streck')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jens Streck')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jens Streck')}>My Hobbies: Netflix</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m a React App!'));
  }
}

export default App;
