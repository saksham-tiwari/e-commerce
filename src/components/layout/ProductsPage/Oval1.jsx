import React from 'react'
import { useHistory } from 'react-router';
// import sample from "../../../assets/download.jfif"

const Oval1 = (props) => {
    const history = useHistory();
    const productClick = ()=>{
        history.push(`/product/${props.id}`)
    }
    return (
        <div className="oval oval1 flip-card" onClick={productClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={props.img} alt="prodImg" className="oval-img"/>
                </div>
                <div className="flip-card-back">
                <h1>{props.name.substring(0,15)+"..."}</h1>
                <p>{props.brand}</p>
                <h5>Average rating: {props.rating}<span 
                style={{position: "relative", top: "-2px", fontSize:"16px"}}
                >&#11088;</span></h5>
                
                <p>{props.description}</p>
                </div>
            </div>
            <p className="priceTag">&#8377;{props.price}</p>
        </div>
    )
}

export default Oval1
