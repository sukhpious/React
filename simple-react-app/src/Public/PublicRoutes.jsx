import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../Layout/Layout";

const PublicRoutes = () => {
	return (
		// Element
		<Layout>
			{/* {children} */}
			<Outlet />
		</Layout>
	);
};

export default PublicRoutes;
