import { useState } from "react";
import { Image } from "../components/Image";
import { sculptureList } from "../model/sculptures";
import Button from "../components/Button";

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);
	const hasNext = index < sculptureList.length - 1;

	let imgList = sculptureList[index];

	const nextImg = () => {
		if (hasNext) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};

	const showMoreText = () => {
		setShowMore(!showMore);
	};

	return (
		<div>
			<h1>{imgList.name}</h1>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<span>by {imgList.artist}</span>
			<Button onClick={nextImg}>Next Image</Button>
			<Image src={imgList.url} alt={imgList.alt} />
			<Button onClick={showMoreText}>Show more</Button>
			{showMore && <p>{imgList.description}</p>}
		</div>
	);
};
