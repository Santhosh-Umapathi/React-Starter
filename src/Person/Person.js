import React from 'react';
import './Person.css'

const Person = (props) =>
{

	const {name, age, children, inputHandler} = props

	return (
	<div>
		<p className='Person'> I am {name}, {age} years old </p>
			
		<p>{children}</p>
			
		<input onChange={inputHandler} />
	</div>
); 
}

export default Person;