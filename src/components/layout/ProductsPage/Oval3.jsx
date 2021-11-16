import React from 'react'

const Oval3 = (props) => {
    return (
        <div className="oval oval3 flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={props.img} alt="prodImg" className="oval-img"/>

                </div>
                <div className="flip-card-back">
                <h1>{props.name}</h1>
                <p>{props.brand}</p>
                <p>{props.description}</p>
                </div>
            </div>
            <p className="priceTag">Rs.{props.price}</p>
        </div>
    )
}

export default Oval3
