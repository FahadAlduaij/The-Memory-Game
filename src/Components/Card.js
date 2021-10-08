import React from "react";


function Card(props) {
	

	return (
		<div
			className="card"
			onClick={() => {
				props.setCardFlip(props.id);
				props.setFlipped(props.flipped + 1);
			}}
		>
			<img className="image" src={props.image} alt={props.name}></img>
		</div>
	);
}

export default Card;
