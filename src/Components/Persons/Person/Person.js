import React, {Component} from 'react';
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


class Person extends Component
{

	constructor(props) {
		super(props)
		this.inputReference = React.createRef() // initial ref object created
	}

	componentDidMount()
	{
		// this.inputEl.focus() // 1st way
		this.inputReference.current.focus()
	}


	render()
	{
		console.log("Person JS => Render")


	const { name, age, children, inputHandler, click, state } = this.props
	
	const randNum = Math.random()

	/*if (randNum > 0.7)
	{
		throw new Error("Something went wrong")
	}
	else
	{*/
		return (
			<StyledDiv>
				<p className='Person' onClick={click}> I am {name}, {age} years old </p>
					
				<p>{children}</p>
					
				<input
					onChange={inputHandler}
					// ref={(inputElement) => { this.inputEl = inputElement }} //1st way
					ref = {this.inputReference}// second way
				/>
					
					<StyledButton alt= {state}>
						Styled Button
					</StyledButton>
			</StyledDiv>
		); 
		
}
	
}

export default Person;