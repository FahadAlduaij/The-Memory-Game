import React from "react";
import CardsArray from "../CardsArray";
import { useState } from "react";

function CardList({
	id,
	image,
	flipped,
	setFlipped,
	flipArray,
	setFlipArray,
	cardEqual,
	setCardEqual,
}) {
	const mainImage = CardsArray.filter((card) => card.id === 1).map(
		(card) => card.img
	);

	const [cardFlip, setCardFlip] = useState(mainImage);

	return (
		<div
			className="card"
			onClick={() => {
				setCardFlip(image);
				setFlipped(flipped + 1);
				flipArray.push(id);
			}}
		>
			<div>
				<img className="image" src={cardFlip} alt={mainImage}></img>
			</div>
		</div>
	);
}

export default CardList;
