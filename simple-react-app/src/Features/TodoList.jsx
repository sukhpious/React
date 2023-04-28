import React from "react";

function formatDate(date) {
	return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
const today = new Date();
const TodoList = () => {
	const name = "Georgia Zara";
	return (
		<div>
			{name} TodoList for {formatDate(today)}
		</div>
	);
};

export default TodoList;
