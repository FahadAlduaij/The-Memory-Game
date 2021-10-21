import React from "react";
import CardsArray from "../CardsArray";
import Card from "./Card";

function CardList() {
	const array = CardsArray.filter((card) => card.id !== 1).map((card) => (
		<Card key={card.id} card={card} />
	));

	return (
		<div className='card-container'>
			{array}
			{array}
		</div>
	);
}

export default CardList;
