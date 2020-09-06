import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component
{
  state = {
    persons: [
      { name: 'Max', age: 25 },
      {name: 'Jack', age: 30},
      {name: 'Kol', age: 49},
    ],
    otherState: 'untouched'
  }

  switchNamesHandler = () =>
  {
    this.setState({
      persons: [
        { name: 'Maximillian', age: 25 },
        {name: 'Jackian', age: 30},
        {name: 'Kolian', age: 49},
      ],
    })
    }

    nameChangeHandler = (event) =>
    {
      this.setState({
        persons: [
          { name: event.target.value, age: 25 },
          {name: 'Jackian', age: 30},
          {name: 'Kolian', age: 49},
        ]
      })
    }

  render()
  {
    const style = {
      backgroundColor: 'orange',
      border: '1px solid blue',
      cursor: 'pointer',
      padding:'8px'
    }



    return (
      <div className="App">
        <p className="App-intro"> React Starter</p>
        <button onClick = {this.switchNamesHandler} style={style}> 
          Switch Names
        </button>

        <Person name={this.state.persons[0].name}/>
        <Person />
        <Person name={this.state.persons[2].name} inputHandler={this.nameChangeHandler}/>

      </div>
    );
  }
}

export default App;
