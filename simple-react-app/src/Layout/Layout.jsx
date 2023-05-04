import React from "react";
import Navbar from "./Navbar";

// App navbar, Sidebar and pages

export const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};
