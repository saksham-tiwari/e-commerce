import React from 'react'
import Block from "../Block/WishlistBlock"
import CardCarousel from "../CardCarousel"

const Wishlist = () => {
    return (
        <div>
            <h1 className="whole">My Wishlist</h1>
            <hr className="hr-wish"/>
            <Block/>            
            <Block/>            
            <Block/>
            <Block/>
            <br/>
            <hr className="hr-wish"/>
            <br/>
            <h3>Similars</h3>
            <br/>

            <CardCarousel/>

        </div>
    )
}

export default Wishlist
