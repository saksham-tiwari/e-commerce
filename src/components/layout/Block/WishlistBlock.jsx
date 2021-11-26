import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styles from "./Block.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { useWishlist,useSetWishlist } from '../../../contexts/WishlistContext'
import SweetAlert from 'react-bootstrap-sweetalert';




const Block = (props) => {
    const setWishlist = useSetWishlist();
    const wishlist = useWishlist();
    const history = useHistory();
    const [sweet, setSweet] = useState(false);

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
    const delProd = ()=>{
        setSweet(false);
        access_token = JSON.parse(localStorage.getItem("keys")).access;

        axios({
            method: "delete",
            url: "https://vshopappdjango.herokuapp.com/api/products/wishlist/",
            data: {id:props.id},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            
            if(res.status===404){
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
        .catch((err)=>{
            if(err.response.status===404){
                props.setSuccess2(true);
                setTimeout(()=>{
                    props.setSuccess2(false);
                },3000)
                console.log(wishlist);
                // for(let i=0;i<wishlist.length;i++){
                //     if(wishlist[i].id===props.id){
                //         delId=i;
                //         break;
                //     }
                // }
                let wish = wishlist.filter((prod)=>prod.id!==props.id);

                setWishlist(wish)
            }
        })
    }

    const onConfirm= ()=>{
        delProd();
    }
    const onCancel = ()=>{
        setSweet(false)
    }
    return (
        <div className={styles.cardProducts}>
            <div className={styles.cardProduct}>
            {sweet?<SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title={"Are you sure you want to delete?"}
                    onConfirm={onConfirm}
                    focusCancelBtn
                    onCancel={onCancel}
                    //  dependencies={[this.state.firstName, this.state.lastName]}
                />:<></>}
                <div onClick={handleImgClick}> <img src={props.img} alt="" className={styles.imgSample}></img> </div>
                <div className={styles.widthSet}>
                    <h4 className={styles.h4} onClick={handleImgClick}>{props.name}</h4>
                    <h5>&#8377;{props.price}</h5>
                    <span>Description</span>
                    <p className={styles.desc}>{props.desc}</p>
                    <button class={styles.cartDelBtn} onClick={()=>setSweet(true)}><DeleteIcon/></button>
                    <button class={styles.cartBtn} onClick={sendToCart}>Add to cart</button>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Block
