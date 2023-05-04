import React from "react";
import { Card } from "../components/Card";
import { sculptureList } from "../model/sculptures";

const NewItems = () => {
	return (
		<>
			{sculptureList.length > 0 &&
				sculptureList.map((item, index) => {
					return index > 3 ? false : <Card key={index} src={item.url} alt={item.alt} name={item.name} desc={item.description} />;
				})}
		</>
	);
};
export default NewItems;
