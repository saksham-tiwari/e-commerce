import React from 'react'
import styles from "./Block.module.css"
import Stars from "../Stars/Stars"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


const Block = (props) => {
    
    return (
        <div className={styles.cardProducts}>
            <div className={styles.cardProduct}>
                <div className={styles.imgSample}></div>
                <div>
                    <h4>Product Name</h4>
                    <h5>Price</h5>
                    <Stars rating={props.rating} edit={false}/>
                    <span>Desc</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <RemoveIcon fontSize="small"/><span className={styles.number}>1</span><AddIcon fontSize="small"/> <DeleteIcon/>
                    
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Block
