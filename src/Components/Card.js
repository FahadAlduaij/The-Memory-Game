import React from 'react'


function Card(props) {
    
    

    return (
        <div className='card' >
            <img className='image' src={props.img} ></img>
        </div>
    )
}

export default Card
