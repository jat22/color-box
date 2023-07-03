import React from "react";

const Box = ( { id, color, width, height, removeBox }) => (
		<div id={id} style={{display:"inline-block", textAlign:"center"}}>
			<div style={{
				backgroundColor: color, 
				width : `${width}px`, 
				height : `${height}px`}}>
			</div>
			<div>
				<button onClick={removeBox} style={{width:"100%"}}>X</button>
			</div>
		</div>
		
	)


export default Box