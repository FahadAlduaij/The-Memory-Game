import React from "react";
import Card from "./Card";
import CardsArray from '../CardsArray'
import { useState } from "react"


function CardList() {
    const [cardFlip, setCardFlip] = useState("")

    const cards = CardsArray.filter(card => card.id === 1).map(card => card.img)
    console.log(cards)
	return (
		<div className="card-container">
            <Card img={cards} setCard={setCardFlip} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
            <Card img={cards} />
		</div>
	);
}

export default CardList;
