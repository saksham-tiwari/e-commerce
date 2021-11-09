import React from 'react'
import styles from "./Block.module.css"
import sample from "../../../assets/download.jfif"



const Block = () => {
    return (
        <div className={styles.cardProducts}>
            <div className={styles.cardProduct}>
                <div className={styles.imgSample}></div>
                <div>
                    <h4>Product Name</h4>
                    <h5>Price</h5>
                    <span>Desc</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <button class={styles.cartBtn}>Add to cart</button>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Block
