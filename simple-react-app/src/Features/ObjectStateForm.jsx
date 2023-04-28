import React from "react";
import { useState } from "react";

export const ObjectStateForm = () => {
	const [person, setPerson] = useState({
		name: "Niki",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	function handleNameChange(e) {
		setPerson({
			...person,
			name: e.target.value,
		});
	}
	function handleCityChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: e.target.value,
			},
		});
	}
	function handleImageChange(e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: e.target.value,
			},
		});
	}
	return (
		<>
			<label htmlFor="name">
				Name:
				<input type="text" value={person.name} onChange={handleNameChange} />
			</label>
			<label htmlFor="city">
				City:
				<input type="text" value={person.artwork.city} onChange={handleCityChange} />
			</label>
			<label htmlFor="image">
				Image:
				<input type="text" value={person.artwork.image} onChange={handleImageChange} />
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{" by "}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</>
	);
};
