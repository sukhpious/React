import { useState } from "react";

export const StateSnapshot = () => {
	// textarea
	const [msg, setMsg] = useState();
	const [isSent, setIsSent] = useState(false);

	const [number, setNumber] = useState(0);

	const [person, setPerson] = useState({
		name: "John Smith",
		city: "Melbourne",
	});

	function handleCityChange(e) {
		setPerson({
			...person, // COPY the old one with sprad syntax
			city: e.target.value, // change this value
		});
	}
	// TODO
	// function handleNameChange
	// no styles added

	if (isSent) {
		return <h1>Your message is on its way!</h1>;
	}

	return (
		<div>
			<h1>State updates are Hazy and Crazy</h1>
			<h2>State as a SnapShot:- UI has snapshot not current state, keep in your mind.</h2>
			<section>
				<h3>Event handler executes, changes state and render component with new value. Easy, right</h3>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setIsSent(true);
					}}></form>
				<textarea placeholder="message" value={msg} onChange={(e) => setMsg(e.target.value)}>
					Hello
				</textarea>
				<button type="submit">Send Message</button>
			</section>
			<h2>Changing count to 2 </h2>
			<section>
				<h3>Event handler executes, changed state and render with increase by 1 </h3>

				<p>{number}</p>

				<button onClick={() => setNumber(number + 1)}>Increase by 1</button>

				<h3>
					Event handler executes once, run the function and has the state changed in UI or more specifically in an event handler?
					<br />
					NO
					<br />
					Run another increase function and component is rendered with increase by 1.
					<h4>Setting state only change the next render!!!</h4>
					<p>Event handler done executing. Render function ran and has the state 0 from previous render so it increases by one</p>
				</h3>
				<button
					onClick={() => {
						setNumber(number + 1);
						setNumber(number + 1);
					}}>
					Increase by 1
				</button>
			</section>
			<section>
				<h3> Check the alert now!</h3>
				<h2>An event handler is done executing but the state is updated after the render. It is getting stale value from the snapshot</h2>
				<h1>{number}</h1>
				<button
					onClick={() => {
						setNumber(number + 5);
						alert(number);
					}}>
					+5
				</button>
				<h2>And yes, even for the timer function. setTimeouet was scheduled with the state value in the snapshot at that time. </h2>
				<button
					onClick={() => {
						setNumber(number + 5);
						setTimeout(() => {
							alert(number);
						}, 3000);
					}}>
					+5
				</button>
				<h4>By know, it is clear that React keeps the state values “fixed” within one render event handlers.</h4>
				<section>
					<h2>And if needed updated state before re render</h2>
					<h2>Need to update multiple state Variables, batch processing aka batching that eliminate too many re renders</h2>
					<h2>Update the same state multiple time before re render</h2>
					<h2>Update function</h2>
					<p>React run this after all the code in the event handler ran</p>
					<button
						onClick={() => {
							setNumber((n) => n + 1);
							setNumber((n) => n + 1);
							setNumber((n) => n + 1);
						}}>
						+3
					</button>
					{number}
				</section>
				<section>
					<h2>Here is more fun with State</h2>
					<button
						onClick={() => {
							// first n  = unused
							//setting w/o function
							setNumber(number + 5); //  n = 5
							// setting with function works
							setNumber((n) => n + 1); // 6
						}}></button>

					<button
						onClick={() => {
							setNumber(number + 5);
							setNumber((n) => n + 1);
							// by now n = 6
							//again w/0 function
							// replaced 6 with 42
							setNumber(42);
						}}></button>
				</section>
				<section>
					<h2>State can have objects</h2>
					<h2>Updating object in state: treat them as immutable, replace them</h2>
					<p>create a new object and pass it to the state setting function:</p>
					<h2>Do not directly change objects and arrays instead update them using</h2>
					<p> ...spread syntax that copied objects and arrays</p>
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
				</section>
				<section>
					<h2>A few more...</h2>
					<p>Variables and event handlers do not “survive” re-renders. Every render has its own event handlers.</p>
					<p>React waits until all code in the event handlers has run before processing your state updates. </p>
				</section>
				{/* state snapshot vs bundle snapshot  vs hotupdate*/}
				{/* <button onClick={increase}>Increase by 1</button> */}
				<br />
				<p>Excecuted the function and updated the DOM. StateSnapshot update - state updated</p>
				<br />
				<p>Excecuted the function and DOM not updated. StateSnapshot not generated - state is stale</p>
			</section>
		</div>
	);
};
