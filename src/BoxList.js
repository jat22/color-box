import React, { useState } from "react";
import { v4 as uuid} from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxList, setBoxList] = useState([]);

	const addBox = (newBox) => {
		setBoxList((boxList) => [...boxList, {...newBox, id: uuid()}])
	}
	const removeBox = (e) => {
		e.preventDefault();
		const boxId = e.target.parentNode.parentNode.id;

		setBoxList((boxList) => (
			[...boxList].filter(box => box.id !== boxId)
			)
		)
	}

	return(
		<>
			<div>
				{boxList.map( box => (
					<Box 
						key={box.id}
						id={box.id}
						color={box.color} 
						width={box.width} 
						height={box.height}
						removeBox={removeBox} 
					/>
				))}
			</div>
			<div>
				<NewBoxForm addBox={addBox} />
			</div>
		</>
	)
}

export default BoxList