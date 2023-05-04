import React from "react";

export const Card = ({ src, alt, name, desc }) => {
	return (
		<div className="rounded-lg">
			<img src={src} alt={alt} height={400} width={400} />
			<p>{name}</p>
			<p>{desc}</p>
		</div>
	);
};
