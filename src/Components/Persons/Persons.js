import React from 'react'
import Person from './Person/Person'
//import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

export default function Persons(props) {
	return (
		props.persons.map((item, index) => {
         //<ErrorBoundary key = {item.id}>
         return <Person
            name={item.name}
            age={item.age}
            //inputHandler={props.nameChangeHandler}
            click={() => props.deletePersonHandler(index)}
            inputHandler={event => props.nameChangeHandler(event, item.id)}
            state = {props.showPersons}
          />
        //</ErrorBoundary> 
      })
	)
}
