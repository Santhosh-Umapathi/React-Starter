import React from 'react'
import classes from './Cockpit.css'

export default function Cockpit(props) {


	// Inline Style
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   padding: '8px',
    // }

    // let classes = ["red" ,"bold"].join(" ") // Gives "red bold", 2 css classes combined

    // Alternative dynamic styling
    // let classes = []
    // if (this.state.persons.length <= 2)
    // {
    //   classes.push('red') // ['red]
    // }
    // if (this.state.persons.length <= 1)
    // {
    //   classes.push('bold') // ['red, 'bold']
    // }
	let buttonClass = [classes.Button]
    // let buttonClass = ''


    let classesArray = []
    if (props.persons.length <= 2)
    {
      classesArray.push(classes.red) // ['red]
    }
    if (props.persons.length <= 1)
    {
      classesArray.push(classes.bold) // ['red, 'bold']
	}
	
	if (props.showPersons)
	{
		buttonClass.push(classes.Red)

	}

	return (
		<div>
			<p className={classesArray.join(" ")}> React Starter</p>

			<button onClick={props.togglePersons} className={buttonClass.join(" ")}>
				{/*style={style}*/}{/* className = {buttonClass}*/}
				Toggle Persons
			</button>
		</div>
	)
}
