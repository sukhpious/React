import React from "react";
import Button from "../components/Button";

const VideoPlayer = () => {
	return (
		<>
			<Button onClick={() => alert("Start Playing")}>Play</Button>
			<Button onClick={() => alert("Stop Playing")}>Pause</Button>
		</>
	);
};

export default VideoPlayer;
