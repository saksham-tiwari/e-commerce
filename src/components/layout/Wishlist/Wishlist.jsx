import React from 'react'
import styles from "./Wishlist.module.css"
import Block from "./Block"
import CardCarousel from "../CardCarousel"

const Wishlist = () => {
    return (
        <div>
            <h1 className={styles.whole}>My Wishlist</h1>
            <hr/>
            <Block/>            
            <Block/>            
            <Block/>
            <Block/>
            <br/>
            <hr/>
            <br/>
            <h3>Similars</h3>
            <br/>

            <CardCarousel/>

        </div>
    )
}

export default Wishlist
