import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import styles from "./Block.module.css"



const Block = (props) => {
    const history = useHistory();
    var access_token
    const sendToCart = ()=>{
        access_token = JSON.parse(localStorage.getItem("keys")).access;
        axios({
            method: "put",
            url: "https://vshopappdjango.herokuapp.com/api/products/cart/add-product/",
            data: {id:props.id, quantity:1},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            
            if(res.status===201){
                props.setSuccess(true);
                setTimeout(()=>{
                    props.setSuccess(false);
                },3000)
            }
            // else if(res.status===208){
            //     setSuccess3(true);
            //     setTimeout(()=>{
            //         setSuccess3(false);
            //     },5000);
            // }
        })
    }
    const handleImgClick = ()=>{
        history.push(`/product/${props.id}`)
    }
    return (
        <div className={styles.cardProducts}>
            <div className={styles.cardProduct}>
                <div onClick={handleImgClick}> <img src={props.img} alt="" className={styles.imgSample}></img> </div>
                <div>
                    <h4 className={styles.h4} onClick={handleImgClick}>{props.name}</h4>
                    <h5>&#8377;{props.price}</h5>
                    <span>Description</span>
                    <p className={styles.desc}>{props.desc}</p>
                    <button class={styles.cartBtn} onClick={sendToCart}>Add to cart</button>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Block
