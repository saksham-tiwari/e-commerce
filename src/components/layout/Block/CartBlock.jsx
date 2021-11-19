import React from 'react'
import styles from "./Block.module.css"
import Stars from "../Stars/Stars"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useCart, useSetCart } from '../../../contexts/CartContext';


const Block = (props) => {
    const history = useHistory();
    var access_token;
    const setCart = useSetCart();
    const handleDelete = ()=>{
        access_token= JSON.parse(localStorage.getItem('keys')).access
        axios({
            method: "delete",
            url: "https://vshopappdjango.herokuapp.com/api/products/cart/remove-product/",
            data: {id:props.id},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status===205){
                console.log("Deleted");
                axios({
                    method: "get",
                    url: "https://vshopappdjango.herokuapp.com/api/products/cart/",
                    headers: { 
                        Authorization: "Bearer " + access_token
                     },
                })
                .then((res)=>{
                    let priceSum=0;
                    setCart(res.data)
                    // console.log(res.data);
                    for(let i=0; i<res.data.length;i++){
                        priceSum+=  res.data[i].price;
                        // setSum(sum+data[i].price)
                    }
                    props.setSum(priceSum);
                    // setFullPageLoader(false);
                })
            }
        })
    }

    const handleDeleteAll = ()=>{
        access_token= JSON.parse(localStorage.getItem('keys')).access
        axios({
            method: "delete",
            url: "https://vshopappdjango.herokuapp.com/api/products/cart/delete-product/",
            data: {id:props.id},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status===204){
                console.log("Deleted all");
                axios({
                    method: "get",
                    url: "https://vshopappdjango.herokuapp.com/api/products/cart/",
                    headers: { 
                        Authorization: "Bearer " + access_token
                     },
                })
                .then((res)=>{
                    let priceSum=0;
                    setCart(res.data)
                    // console.log(res.data);
                    for(let i=0; i<res.data.length;i++){
                        priceSum+=  res.data[i].price;
                        // setSum(sum+data[i].price)
                    }
                    props.setSum(priceSum);
                    // setFullPageLoader(false);
                })
            }
        })
    }

    const handleAdd = ()=>{
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
            console.log(res.status)
            if(res.status===201){
                console.log("Added");
                axios({
                    method: "get",
                    url: "https://vshopappdjango.herokuapp.com/api/products/cart/",
                    headers: { 
                        Authorization: "Bearer " + access_token
                     },
                })
                .then((res)=>{
                    let priceSum=0;
                    setCart(res.data)
                    // console.log(res.data);
                    for(let i=0; i<res.data.length;i++){
                        priceSum+=  res.data[i].price;
                        // setSum(sum+data[i].price)
                    }
                    props.setSum(priceSum);
                    // setFullPageLoader(false);
                })
            }
        })
    }
    
    const handleImgClick = ()=>{
        history.push(`/product/${props.id}`)
    }
    return (
        <div className={styles.cardProducts}>
            <div className={styles.cardProduct}>
                <div onClick={handleImgClick}><img src={props.img} alt=""  className={styles.imgSample}></img></div>
                <div>
                    <h4 className={styles.h4}>{props.name}</h4>
                    <h5>&#8377;{props.price}</h5>
                    <Stars rating={props.rating} edit={false}/>
                    <span>Description</span>
                    <p className={styles.desc}>{props.desc}</p>
                    <button className={styles.btnPlusMinus}><RemoveIcon fontSize="small" onClick={handleDelete} /></button><span className={styles.number}>{props.quant}</span><button className={styles.btnPlusMinus}><AddIcon fontSize="small" onClick={handleAdd}/></button> <button className={styles.btnPlusMinus}><DeleteIcon onClick={handleDeleteAll}/></button>
                    
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Block
