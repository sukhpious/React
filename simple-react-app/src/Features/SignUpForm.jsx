import React from "react";
import { useRef } from "react";

const SignUpForm = () => {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				alert("Submitting!");
			}}>
			<input ref={inputRef} onClick={handleClick} />
			<br />
			<input type="email" />
			<button>Send</button>
		</form>
	);
};

export default SignUpForm;
