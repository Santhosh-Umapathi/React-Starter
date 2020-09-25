import React from 'react'

/*const WithClass = props => (
		<div className = {props.className}>
			{props.children}
		</div>
)*/

// Alternative wrapper
const WithClass = (WrappedComponent, className) => 
{
	return (props) => (
		<div className = {className}>
			<WrappedComponent {...props}/>
		</div>
	)
}
	



	
export default WithClass


