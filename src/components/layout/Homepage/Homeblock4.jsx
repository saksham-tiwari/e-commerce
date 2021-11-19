import React from 'react'
import { Link } from 'react-router-dom'
import mencloth from "../../../assets/homeimages/mencloth.svg"
import womencloth from "../../../assets/homeimages/womencloth.svg"

const Homeblock4 = () => {
    return (
        <div className="clothings">
            <div className="clothing">
                <h1>Men's clothing</h1>
                <img src={mencloth} alt="menclothing" className="imgclothing"/>
                {/* <Link to="/products/men clothing" className="clothing-link">View Catalog</Link> */}
            </div>
            <div className="clothing">
                <h1>Women's clothing</h1>
                <img src={womencloth} alt="womenclothing" className="imgclothing"/>
                {/* <Link to="/products/women clothing" className="clothing-link">View Catalog</Link> */}
            </div>
        </div>
    )
}

export default Homeblock4
