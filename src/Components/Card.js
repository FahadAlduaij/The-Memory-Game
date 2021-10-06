import React from 'react'
import CardsArray from "../CardsArray";

function Card(props) {
    const first = CardsArray.filter(card => card.id === 1).map(card => card.img)
    const second = CardsArray.filter(card => card.id === 2).map(card => card.img)
    
    return (
        <div className='card' onClick={() => props.setCardFlip( props.image === first
         ? first : second )}>
            <img className='image' src={props.image} ></img>
        </div>
    )
}

export default Card
