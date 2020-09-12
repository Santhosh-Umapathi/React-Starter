import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import Validation from './Validation/Validation'
// import CharComp from './Validation/CharComp'




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
    inp: '',
    chars:[]


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

  
  // inpHandler = event =>
  // {
  //   this.setState({
  //     inp: event.target.value
  //   })

   
  // }

  // deleteChar = (index) =>
  // {
  //   const textArr = this.state.inp.split('')
  //   textArr.splice(index, 1)
  //   const newArr = textArr.join('')

  //   this.setState({
  //     inp: newArr
  //   })
    
  //   }
  


  render()
  {
    // Inline Style
    const style = {
      backgroundColor: 'green',
      color:'white',
      border: '1px solid blue',
      cursor: 'pointer',
      padding:'8px'
    }

    // let classes = ["red" ,"bold"].join(" ") // Gives "red bold", 2 css classes combined

    // Alternative dynamic styling
    let classes = []
    if (this.state.persons.length <= 2)
    {
      classes.push('red') // ['red]
    }
    if (this.state.persons.length <= 1)
    {
      classes.push('bold') // ['red, 'bold']
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
      style.backgroundColor = 'red'

      }

    // const char = this.state.inp.split('').map((i, index) =>
    // {
    //   return <CharComp char={i} clicked={() => this.deleteChar(index)}/>
    // })

    return (
      <div className="App">

        <p className={classes.join(" ")}> React Starter</p>

        <button onClick = {this.togglePersons} style={style}> 
          Toggle Persons
        </button>

        {persons}

        {/* {char} */}

        {/* <UserInput change={this.userNameHandler} value={this.state.userName}/>

        <UserOutput name={this.state.userName}/>
        <UserOutput /> */}

        {/* <input onChange={(event) => this.inpHandler(event)} value={this.state.inp}/> */}
        {/* <p>{this.state.inp.length}</p> */}
        {/* <Validation length={this.state.inp.length} /> */}

      </div>
    );
  }
}

export default App;
