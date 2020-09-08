import React from 'react'
import './CharComp.css'



export default function CharComp(props)
{


	return (



		<div className = 'Root' onClick = {props.clicked}>
			<p>{props.char}</p>
		</div>
	)
}
