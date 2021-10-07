import React from "react";
import Card from "./Card";
import CardsArray from "../CardsArray";
import { useState } from "react";

function CardList(props) {
	function image(index) {
		return CardsArray.filter((card) => card.id === index).map(
			(card) => card.img
		);
	}

	const [cardFlip, setCardFlip] = useState(image(1));

	return (
		<div>
			<Card
				setCardFlip={setCardFlip}
				id={props.id}
				image={cardFlip}
				role={props.role}
				setRole={props.setRole}
			/>
		</div>
	);
}

export default CardList;
