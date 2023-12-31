import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box"
import exp from "constants";


it("renders without crashing", () => {
	render(<Box />)
});

it("matches snapshot", () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
})