import React from "react";
import Card from "./Card";
import CardsArray from "../CardsArray";
import { useState } from "react";

function CardList() {
    const first = CardsArray.filter(card => card.id === 1).map(card => card.img)
    const second = CardsArray.filter(card => card.id === 2).map(card => card.img)

	const [cardFlip, setCardFlip] = useState(first);
    const [flipped, setFlipped] = useState(false)
    

	return (
		<div className="card-container">
			<Card setCardFlip={setCardFlip} image={cardFlip}  />
			<Card setCardFlip={setCardFlip} image={cardFlip}  />
			<Card setCardFlip={setCardFlip} image={cardFlip}  />
			<Card setCardFlip={setCardFlip} image={cardFlip}  />
			<Card setCardFlip={setCardFlip} image={cardFlip}  />

		</div>
	);
}

export default CardList;
