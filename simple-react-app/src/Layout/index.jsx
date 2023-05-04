import React from "react";
import NewItems from "../Clothing/NewItems";

const Home = () => {
	return (
		<div className="c-bg-lighterOrange">
			<div className="c-bg-image-main bg-contain bg-no-repeat bg-center"></div>
			<div className="c-bg-lightOrange">
				<h2>New IN</h2>
				<NewItems />
			</div>
		</div>
	);
};

export default Home;
