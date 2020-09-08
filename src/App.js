import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';





class App extends Component
{
  state = {
    persons: [
      { id: 'sda',name: 'Max', age: 25 },
      {id: 'efaef',name: 'Jack', age: 30},
      {id: 'gerge',name: 'Kol', age: 49},
    ],
    otherState: 'untouched',
    userName: 'Jack',
    showPersons: false,


  }

  // switchNamesHandler = () =>
  // {
  //   this.setState({
  //     persons: [
  //       { name: 'Maximillian', age: 25 },
  //       {name: 'Jackian', age: 30},
  //       {name: 'Kolian', age: 49},
  //     ],
  //   })
  //   }

  togglePersons = () =>
  {
    const toggleState = this.state.showPersons
    this.setState({showPersons:!toggleState})
    }

    nameChangeHandler = (event, id) =>
    {
      const personIndex = this.state.persons.findIndex(i => i.id === id)
      const person = { ...this.state.persons[personIndex] } //Object.assign({}, this.state.persons[personIndex])
      
      person.name = event.target.value
      const persons = [...this.state.persons]

      persons[personIndex] = person

      this.setState({persons: persons})
    }
  
  userNameHandler = (event) =>
  {
    this.setState({
      userName: event.target.value
    })
  }
  
  deletePersonHandler = (personIndex) =>
  {
    //const newPersons = this.state.persons // Reference to original array
    const newPersons = [...this.state.persons] // Copying array
    newPersons.splice(personIndex, 1)
    this.setState({persons: newPersons})
    }

  render()
  {
    // Inline Style
    const style = {
      backgroundColor: 'orange',
      border: '1px solid blue',
      cursor: 'pointer',
      padding:'8px'
    }

    let persons = null;
    if (this.state.showPersons)
    {
      persons = this.state.persons.map((item, index) => {
        return <div>
          <Person
            key = {item.id}
            name={item.name}
            age={item.age}
            inputHandler={this.nameChangeHandler}
            click={() => this.deletePersonHandler(index)}
            inputHandler = {event => this.nameChangeHandler(event, item.id)}
          />
          </div> 

        })
      }


    return (
      <div className="App">

        <p className="App-intro"> React Starter</p>

        <button onClick = {this.togglePersons} style={style}> 
          Toggle Persons
        </button>

        {persons}

        <UserInput change={this.userNameHandler} value={this.state.userName}/>

        <UserOutput name={this.state.userName}/>
        <UserOutput />


      </div>
    );
  }
}

export default App;
