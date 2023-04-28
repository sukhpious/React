import React from "react";

// Inline - for less commands,
//Outside of JSX - biggers and arrow - consise ones

function AlertButton({ message, children }) {
	return <button onClick={() => alert(message)}>{children}</button>;
}

function Button(onClick, children) {
	return <button onClick={onClick}>{children}</button>;
}

export const EventHandlers = () => {
	function handleClick() {
		alert("Click using the outside function");
	}
	return (
		<div>
			<AlertButton message={playing}>Playing Movie</AlertButton>
			<AlertButton message={Uploading}>Uploading Movie</AlertButton>
			<Button onClick={() => alert("Clicked")}>Arrow Function</Button>
			<Button onClick={handleClick}>Function defined outside</Button>
			<Button
				onClick={function fnName() {
					alert("Called me");
				}}>
				Inline Function
			</Button>
		</div>
	);
};
