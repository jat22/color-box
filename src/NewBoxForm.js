import React, {useState} from "react";

const NewBoxForm = ({ addBox }) => {
	
	const INITIAL_STATE = {
		color : "#000000",
		width : "50",
		height : "50"
	}

	const[formData, setFormData] = useState(INITIAL_STATE)
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(formData => (
			{
				...formData, 
				[name] : value
			}
		))
	}
	const handelSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	}

	return(
		<form onSubmit={handelSubmit}>
			<label htmlFor="color">Background Color: </label>
			<input
				id="color"
				type="color"
				name="color"
				value={formData.color} 
				onChange={handleChange}
			/>

			<label htmlFor="width" >Width: </label>
			<input
				id="width"
				type="number"
				min="50"
				max="500"
				name="width" 
				placeholder="width" 
				value={formData.width} 
				onChange={handleChange}
			/>

			<label htmlFor="height" >Height: </label>
			<input
				id="height"
				type="number"
				min="50"
				max="500"
				name="height"
				placeholder="height" 
				value={formData.height}
				onChange={handleChange}
			/>
			<button type="submit">
				Add Box
			</button>
		</form>
	)
}



	

export default NewBoxForm