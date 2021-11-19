import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import {Link, withRouter} from "react-router-dom"
import styles from "./Product.module.css"
import Stars from "../Stars/Stars"
import { Tick } from 'react-crude-animated-tick';
import MyComponent from 'react-fullpage-custom-loader'


const Product = (props) => {
    var access_token;
    const [data,setData] = useState([{
        id: props.match.params.id,
        name: "Name",
        price: 0,
        brand: "Brand",
        description: "Description",
        picture1: "",
        picture2: "",
        picture3: "",
        picture4: "",
        comment_product: [],
        tag_product: []
    }]);
    const [success, setSuccess] = useState(false);
    const [success2, setSuccess2] = useState(false);
    const [success3, setSuccess3] = useState(false);
    const [fullPageLoader, setFullPageLoader] = useState(false);


    // var img1;
    useEffect(()=>{
        setFullPageLoader(true);
        // console.log(props.match.params.id)
        axios.get("https://vshopappdjango.herokuapp.com/api/products/")
        .then((res)=>{
            setData(res.data.filter(prod=>prod.id==props.match.params.id));
            console.log(res.data.filter(prod=>prod.id==props.match.params.id));
            // img1= data[0].picture1
            setFullPageLoader(false);

        })

        

        // axios.get("https://vshopappdjango.herokuapp.com/api/products/product-details/",{id:props.match.params.id})
        // .then((res)=>{
        //     setData(res.data);
        //     console.log(res.data);
        //     img1= data.picture1

        // })

        // let fd = new FormData();
        // fd.append("id",props.match.params.id)

        // axios({
        //     method: "get",
        //     url: "https://vshopappdjango.herokuapp.com/api/products/product-details/",
        //     data: fd,
        //   })
        //   .then((res)=>{
        //       setData(res.data);
        //       console.log(res.data);
        //   })
    },[])

    const handleWishClick= ()=>{
        access_token = JSON.parse(localStorage.getItem("keys")).access;
        // axios.put("https://vshopappdjango.herokuapp.com/api/products/wishlist/", {id:props.match.params.id, quantity:1})
        axios({
            method: "put",
            url: "https://vshopappdjango.herokuapp.com/api/products/wishlist/",
            data: {id:props.match.params.id},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            if(res.status===201){
                setSuccess(true);
                setTimeout(()=>{
                    setSuccess(false);
                },5000);
            }
            else if(res.status===208){
                setSuccess2(true);
                setTimeout(()=>{
                    setSuccess2(false);
                },5000);
            }
        })
    }
    const handleCartClick = ()=>{
        access_token = JSON.parse(localStorage.getItem("keys")).access;
        axios({
            method: "put",
            url: "https://vshopappdjango.herokuapp.com/api/products/cart/add-product/",
            data: {id:props.match.params.id, quantity:1},
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            if(res.status===201){
                setSuccess3(true);
                setTimeout(()=>{
                    setSuccess3(false);
                },5000);
            }
            else if(res.status===208){
                setSuccess3(true);
                setTimeout(()=>{
                    setSuccess3(false);
                },5000);
            }
        })
    }

    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}
            {/* {props.match.params.id} */}
            <h1 className="whole">{data[0].name}</h1>
            <div>
                <img src={data[0].picture1} alt="" className={styles.imgOval}></img>
            </div>
            <div className={styles.priceBox}>
                {success?<Alert variant="success" onClose={()=>setSuccess(false)} className={styles.alertSuccess} dismissible>
                    <p>Product added to your wishlist.</p><Tick size={40} /> 
                </Alert>:<p></p>}
                {success2?<Alert variant="success" onClose={()=>setSuccess2(false)} className={styles.alertSuccess} dismissible>
                    <p>Product already in your wishlist.</p>
                </Alert>:<p></p>}
                {success3?<Alert variant="success" onClose={()=>setSuccess3(false)} className={styles.alertSuccess} dismissible>
                    <p>Product added to your cart.</p><Tick size={40} /> 
                </Alert>:<p></p>}
                <h1>&#8377;{data[0].price}</h1>
                <Button className={styles.btnWish} onClick={handleCartClick}>Add to Cart</Button>
                <Button className={styles.btnWish} onClick={handleWishClick}>Add to Wishlist</Button>
                <hr className={styles.hrsides}></hr>

            </div>
            <div className={styles.priceBox2}>
                <span ><img src={data[0].picture1} alt="" className={styles.shortImg}></img></span>
                <span ><img src={data[0].picture2} alt="" className={styles.shortImg}></img></span>
                <span ><img src={data[0].picture3} alt="" className={styles.shortImg}></img></span>
                <span ><img src={data[0].picture4} alt="" className={styles.shortImg}></img></span>
                <hr className={styles.hrsides}></hr>
                <p className={styles.prodID}>Product ID: {data[0].id}</p>
                <Button className={styles.btnOrder} onClick={handleCartClick}>Buy Now!</Button>

            </div>
            <div className={styles.brandDes}>
                <h1>{data[0].brand}</h1>
                <p>{data[0].description}</p>
            </div>
            <div className={styles.ratePro}>
                <p>Rate the product and give your reviews.</p>
                <Stars edit={true} size={32}/>
                <Form.Control as="textarea" rows={4} placeholder="Your reviews" className={styles.textarea} />
                <Button className={styles.textAreaBtn}>Submit</Button>
            </div>

            <div>
                <h1>Reviews</h1>
                {data[0].comment_product.map((comment)=>{
                    return(
                    <div className={styles.comment}>
                        <h3>{comment.author}</h3>
                        <p>{comment.content}</p>
                        <Stars edit={false} rating={comment.rating}/>
                    </div>
                    )
                }
                )
                }
                
            </div>
        </div>
    )
}

export default withRouter(Product);
