import React, { Component } from 'react';
import Person from './components/Person'
;
class App extends Component {
  state = { 
    people: [
      {name: "Johnny Depp", age: 32},
      {name: "John Hammond", age: 56},
      {name: "Indiana Jones", age:42}
    ],
    showPersons: true
   }

  togglePersonsHandler = (event) => {
    this.setState({ showPersons: !this.state.showPersons})
  }
  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex,1);
    this.setState({people})
  }
  render() { 

    let persons = null;
    if(this.state.showPersons){
      persons = this.state.people.map((person,index)=> <Person key={index} name={person.name} deleteHandler={this.deletePersonHandler.bind(this,index)} />);
    }

    return ( 
      <>
        <button onClick={this.togglePersonsHandler}>Toggle person</button>
        <hr/>
        {persons}
      </>
     );
  }
}
 
export default App;
