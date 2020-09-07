import React from 'react'

const UserInput =(props) =>
{

	const style = {border: '2px solid orange', marginTop:'20px'}


	return (
		<div>
			<input onChange={props.change} value={props.value} style={style}/>
		</div>
	)
}

export default UserInput
