import React from 'react'

const Oval1 = (props) => {
    return (
        <div className="oval oval1 flip-card">
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

export default Oval1
