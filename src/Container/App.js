import React, { Component } from 'react';
// import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import Validation from './Validation/Validation'
// import CharComp from './Validation/CharComp'

import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit';

import WithClass  from  '../Components/Aux/WithClass'



class App extends Component
{
  constructor(props) {
    console.log("APP JS => Constructor")
    super(props);


  }

  state = {
    persons: [
      { id: 'sda',name: 'Max', age: 25 },
      {id: 'efaef',name: 'Jack', age: 30},
      {id: 'gerge',name: 'Kol', age: 49},
    ],
    otherState: 'untouched',
    userName: 'Jack',
    showPersons: false,
    showCockpit: true,
    inp: '',
    chars: [],
    changeCounter: 0


  }

  static getDerivedStateFromProps(props, state)
  {
    console.log("APP JS => getDerivedStateFromProps,", props)
    return state
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("APP => shouldComponentUpdate" )

    // this.props === nextProps // Real way 
    return true; // Example
  }

  //componentWillMount()
  //{
    //console.log("APP JS => Component will mount")
  //}

  componentDidMount()
  {
    console.log("APP JS => Component did mount")
  }

  componentDidUpdate()
  {
    console.log("App => componentDidUpdate")
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

      // Best way to depend on prev state to update values
      this.setState((prevState, props) =>
      {
        return { persons: persons, changeCounter: prevState.changeCounter + 1 }
      }
      )
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
    
    console.log("APP JS => Render")
    

    let persons = null;
    if (this.state.showPersons)
    {
      persons = <Persons
      nameChangeHandler={this.nameChangeHandler}
        persons = {this.state.persons}
        deletePersonHandler={this.deletePersonHandler}
        showPersons = {this.state.showPersons}
      />
      // style.backgroundColor = 'red'
      // buttonClass = classes.Red


      }

    // const char = this.state.inp.split('').map((i, index) =>
    // {
    //   return <CharComp char={i} clicked={() => this.deleteChar(index)}/>
    // })

    return (
      /* <WithClass className={classes.App}>
          <Aux>  */
     <div>
        <button onClick = {() => this.setState({showCockpit: !this.state.showCockpit})}>Remove cockpit</button>
        
        { this.state.showCockpit ? 
          <Cockpit
          title = {this.props.appTitle}
          togglePersons={this.togglePersons}
          personsLength={this.state.persons.l}
          showPersons = {this.state.showPersons}
          />
          : null
        }
        {persons}

        {/* {char} 
         <UserInput change={this.userNameHandler} value={this.state.userName}/>

        <UserOutput name={this.state.userName}/>
        <UserOutput /> 

        <input onChange={(event) => this.inpHandler(event)} value={this.state.inp}/> 
        <p>{this.state.inp.length}</p> 
        <Validation length={this.state.inp.length} /> 
        </Aux> 
        </WithClass> */ }

        </div>
    )
  }
}

// export default App;
export default WithClass(App, classes.App); // Alternative   wrapper

 

