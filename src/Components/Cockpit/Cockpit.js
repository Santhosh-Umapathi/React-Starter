import React, {useEffect, useRef} from 'react'
import Aux from '../Aux/Aux'
import Persons from '../Persons/Persons'
import classes from './Cockpit.css'



const Cockpit = (props) =>
{

  const buttonRef = useRef(null)
  


  useEffect(() => {
    console.log("Cockpit: UE 2")

    buttonRef.current.click()
    return () => {
      console.log("Cockpit: UE 2 Clean") // runs before
    }
  })


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
    if (props.personsLength <= 2)
    {
      classesArray.push(classes.red) // ['red]
    }
    if (props.personsLength <= 1)
    {  
      classesArray.push(classes.bold) // ['red, 'bold']
	}
	
	if (props.showPersons)
	{
		buttonClass.push(classes.Red)

	}
  


	return (
		<Aux>
      <p className={classesArray.join(" ")}> {props.title} </p>

      <button
        onClick={props.togglePersons}
        className={buttonClass.join(" ")}
        ref = {buttonRef}
      
      >
				{/*style={style}*/}{/* className = {buttonClass}*/}
				Toggle Persons
			</button>
		</Aux>
	)
}

export default React.memo(Cockpit);