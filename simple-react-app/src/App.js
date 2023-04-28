import logo from "./logo.svg";
import "./App.css";
import Profile from "./Features/Profile";
import PackingList from "./Features/PackingList";
import List from "./Features/List";
import SignUp from "./Features/SignUp";
import { Carousel } from "./Features/Carousel";
import { StateSnapshot } from "./Concepts/StateSnapshot";
import Coffee from "./Features/Coffee";
import TodoList from "./Features/TodoList";
import VideoPlayer from "./Features/VideoPlayer";
import { ObjectStateForm } from "./Features/ObjectStateForm";
import { ArrayStateForm } from "./Features/ArrayStateForm";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}

				{/* <Profile /> */}
				{/* <List /> */}
				{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
				{/* <SignUp /> */}
				{/* <Carousel /> */}

				{/* <Coffee /> */}
				{/* <StateSnapshot /> */}
				{/* <VideoPlayer /> */}
				<ArrayStateForm />
			</header>
		</div>
	);
}

export default App;
