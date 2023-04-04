import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import PackingList from "./components/PackingList";
import List from "./components/List";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}

				<Profile />
				<List />
				{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			</header>
		</div>
	);
}

export default App;
