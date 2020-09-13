import React from 'react';
// import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div` // CSS without class names
	width: 80%;
	box-shadow: 0 2px 3px grey;
	border: 2px solid orange;
	text-align: center;
	padding: 20px;
	margin: 10px auto;
	@media (min-width: 500px)
	{
		width: 450px
	}
`

const Person = (props) =>
{

	const {name, age, children, inputHandler, click} = props

	return (
	<StyledDiv>
		<p className='Person' onClick={click}> I am {name}, {age} years old </p>
			
		<p>{children}</p>
			
		<input onChange={inputHandler} />
	</StyledDiv>
); 
}

export default Person;