import React from 'react'

const Oval2 = (props) => {
    return (
        <div className="oval oval2 flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                </div>
                <div className="flip-card-back">
                <h1>{props.name}</h1>
                <p>{props.category}</p>
                <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Oval2
