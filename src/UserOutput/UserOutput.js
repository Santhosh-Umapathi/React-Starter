import React from 'react'
import './UserOutput.css'

const UserOutput = (props) =>
{
	return (
		<div className = "UserOutput">
			<p> {props.name}</p>
			<p> Text 2</p>

		</div>
	)
}

export default UserOutput