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

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red': "green"};
color:white;
&:hover
{
	background-color:${props => props.alt ? 'orange': "blue"}; 
	color:white;
}
`


const Person = (props) =>
{

	const { name, age, children, inputHandler, click, state } = props
	
	const randNum = Math.random()

	if (randNum > 0.7)
	{
		throw new Error("Something went wrong")
	}
	else
	{
		return (
			<StyledDiv>
				<p className='Person' onClick={click}> I am {name}, {age} years old </p>
					
				<p>{children}</p>
					
					<input onChange={inputHandler} />
					
					<StyledButton alt= {state}>
						Styled Button
					</StyledButton>
			</StyledDiv>
		); 
		}

	
}

export default Person;