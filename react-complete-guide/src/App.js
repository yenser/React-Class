import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Jens', age: 21},
      {id: '2', name: 'Miranda', age: 21},
      {id: '3', name: 'Joel', age: 21},
      {id: '4', name: 'Joe', age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DONT DO THIS this.state.persons[0].name = "Jens Streck";
    this.setState({persons: [
        {name: newName, age: 21},
        {name: 'Miranda', age: 22}
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
         return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
            style={style}
            onClick={this.togglePersonHandler} >
            Toggle Persons</button>

          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m a React App!'));
  }
}

export default App;
