import React from "react";
import CardsArray from "../CardsArray";

function Card(props) {
	return (
		<div
			className="card"
			onClick={() => {
				props.setCardFlip(props.id);
				props.setRole(props.role + 1);
			}}
		>
			<img className="image" src={props.image} alt={props.name}></img>
		</div>
	);
}

export default Card;
