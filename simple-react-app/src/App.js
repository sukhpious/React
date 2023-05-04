// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import PublicRoutes from "./Public/PublicRoutes";
import Home from "./Layout";

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
import SignUpForm from "./Features/SignUpForm";

function App() {
	return (
		// Define Routes and map pages
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<PublicRoutes />}>
				{/* outlet */}
				<Route index element={<Home />}></Route>
			</Route>
		</Routes>
	);
}
export default App;
