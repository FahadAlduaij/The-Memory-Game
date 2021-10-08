import React from "react";
import CardsArray from "../CardsArray";
import { useState } from "react";

function CardList(props) {
	const mainImage = CardsArray.filter((card) => card.id === 1).map(
		(card) => card.img
	);

	const [cardFlip, setCardFlip] = useState(mainImage);

	return (
		<div
			className="card"
			onClick={() => {
				setCardFlip(props.id);
				props.setFlipped(props.flipped + 1);
				props.flipArray.push(props.id)
			}}
		>
			<img className="image" src={cardFlip} alt={mainImage}></img>
		</div>
	);
}

export default CardList;
