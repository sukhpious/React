import React from "react";

function Button({ onClick, children }) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}>
			{children}
		</button>
	);
}

export const EventPropagation = () => {
	return (
		<div
			className="Toolbar"
			onClick={() => {
				alert("You clicked on the toolbar!");
			}}>
			<Button onClick={() => alert("Playing!")}>Play Movie</Button>
			<Button onClick={() => alert("Uploading!")}>Upload Image</Button>
		</div>
	);
};
