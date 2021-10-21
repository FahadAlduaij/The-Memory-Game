import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import game from "../Stores/Game";
import CardsArray from "../CardsArray";

function Card(props) {
	const mainImage = CardsArray.filter((card) => card.id === 1).map(
		(card) => card.img
	);
	const [cardFlip, setCardFlip] = useState(game.mainImage);
	
	return (
		<div
			className="card"
			onClick={() => {
				game.startGame(props.card.id);
				setCardFlip(game.mainImage);
				// props.setCardFlip(props.id);
				// props.setFlipped(props.flipped + 1);
			}}
		>
			<img className="image" src={cardFlip} alt={props.card.name}></img>
		</div>
	);
}

export default observer(Card);
