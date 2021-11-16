import React from 'react'
import { Link } from 'react-router-dom'

const Homeblock4 = () => {
    return (
        <div className="clothings">
            <div className="clothing">
                <h1>Men's clothing</h1>
                <Link to="/" className="clothing-link">View Catalog</Link>
            </div>
            <div className="clothing">
                <h1>Women's clothing</h1>
                <Link to="/" className="clothing-link">View Catalog</Link>
            </div>
        </div>
    )
}

export default Homeblock4
