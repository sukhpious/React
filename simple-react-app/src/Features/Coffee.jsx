import React from "react";

// Do not change variable that existed before
// let guest = 0;
// function Cup() {
// 	guest = guest + 1;
// 	console.log(guest);
// 	return <h2>Tea cup for guest #{guest}</h2>;
// }

// make this component pure by passing a prop
// instead of modifying a preexisting variable

function Cup({ guest }) {
	return <h2>Tea cup for guest #{guest}</h2>;
}
const Coffee = () => {
	return (
		<>
			<Cup guest={1} />
			<Cup guest={2} />
			<Cup guest={3} />
		</>
	);
};

export default Coffee;
