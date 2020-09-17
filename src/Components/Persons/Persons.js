import React, {Component} from 'react'
import Person from './Person/Person'
//import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Persons extends Component
{

  static getDerivedStateFromProps(props, state) 
  {
    console.log("Persons => getDerivedStateFromProps" )
      return state;
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("Persons => shouldComponentUpdate" )

    // this.props === nextProps // Real way 
    return true; // Example
  }

  getSnapshotBeforeUpdate(prevProps, prevState) 
  {
    console.log("Persons => getSnapshotBeforeUpdate")
    //return null (or)
    return {message: "snapshot"}
  } 

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    console.log("Persons => componentDidUpdate")
    console.log(snapshot)
  }

  render()
  {
    console.log("Persons JS => Render")


	return (
		this.props.persons.map((item, index) => {
         //<ErrorBoundary key = {item.id}>
         return <Person
            name={item.name}
            age={item.age}
            //inputHandler={props.nameChangeHandler}
            click={() => this.props.deletePersonHandler(index)}
            inputHandler={event => this.props.nameChangeHandler(event, item.id)}
            state = {this.props.showPersons}
          />
        //</ErrorBoundary> 
      })
	)}
}

export default Persons