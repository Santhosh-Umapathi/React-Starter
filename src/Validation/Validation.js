import React from 'react'

export default function Validation(props)
{


	const validator = props.length > 5
		? <p> text too long</p>
		: <p> text too short</p>
	

	return (
		<div>
			{validator}
		</div>
	)
}
