import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList"
import { query } from "express";
import exp from "constants";


it("renders without crashing", () => {
	render(<BoxList />)
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
})

it("creates and removes box", () => {
	const { queryByText } = render(<BoxList />);
	const addBtn = queryByText("Add Box");

	expect(queryByText('X')).not.toBeInTheDocument();
	fireEvent.click(addBtn);
	expect(queryByText('X')).toBeInTheDocument();

	const rmvBtn = queryByText("X");
	fireEvent.click(rmvBtn);
	expect(queryByText("X")).not.toBeInTheDocument();
})
