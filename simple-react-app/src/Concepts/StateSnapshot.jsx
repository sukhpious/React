import { useState } from "react";

export const StateSnapshot = () => {
	const [count, setCount] = useState(0);
	const [person, setPerson] = useState({
		name: "John Smith",
		city: "Melbourne",
	});

	function handleCityChange(e) {
		setPerson({
			...person,
			city: e.target.value,
		});
	}
	// TODO
	// function handleNameChange
	// no styles added

	function increase() {
		setCount((c) => c + 1);
	}
	return (
		<div>
			<h1>State updates</h1>
			<section>
				<h2>The function is execting twice but the state is not updated . It is getting stale value from the snapshot</h2>
				{count}
				{/* state snapshot vs bundle snapshot  vs hotupdate*/}
				{/* <button onClick={increase}>Increase by 1</button> */}
				<br />
				<button onClick={() => increase()}>Increase by 1</button>
				<p>Excecuted the function and updated the DOM. StateSnapshot update - state updated</p>
				<br />
				<button
					onClick={() => {
						increase();
						increase();
					}}>
					Increase by 2
				</button>
				<p>Excecuted the function and DOM not updated. StateSnapshot not generated - state is stale</p>
				<h3>To fix the stale state issue, use updater function </h3>
				<p>Replace</p>
				<code>setScore(score + 1)</code> with
				<code>setScore(s ={">"} s + 1)</code>
			</section>
			<h2>Updating object in state</h2>
			<p>Do not directly change objects and arrays instead update them using ...spread syntax that copied objects and arrays</p>
			{/* Handle all changes with one function */}
			<label>
				Name:
				<input value={person.name} />
			</label>
			<label>
				City:
				<input value={person.city} onChange={handleCityChange} />
			</label>
			{person.name} lives in {person.city}
		</div>
	);
};
