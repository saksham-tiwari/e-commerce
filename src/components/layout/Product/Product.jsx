import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import {Link, withRouter} from "react-router-dom"
import styles from "./Product.module.css"
import Stars from "../Stars/Stars"
import { Tick } from 'react-crude-animated-tick';
import ReactStars from "react-rating-stars-component";
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
    const [success4, setSuccess4] = useState(false);
    const [fullPageLoader, setFullPageLoader] = useState(false);

    const [stars, setStars] = useState(3);
    const [comment, setComment] = useState("")
    const [mainImg, setMainImg] = useState();


    // var img1;
    useEffect(()=>{
        setFullPageLoader(true);
        // console.log(props.match.params.id)
        axios.get("https://vshopappdjango.herokuapp.com/api/products/")
        .then((res)=>{
            setData(res.data.filter(prod=>prod.id==props.match.params.id));
            console.log(res.data.filter(prod=>prod.id==props.match.params.id));
            setMainImg(res.data.filter(prod=>prod.id==props.match.params.id)[0].picture1);
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

    const ratingChanged = (newRating) => {
        setStars(newRating)
        console.log(stars);
      };

    const handleReviews = ()=>{
        access_token = JSON.parse(localStorage.getItem("keys")).access;
        console.log(parseInt(props.match.params.id));
        console.log(comment);
        console.log(stars);
        axios({
            method: "post",
            url: "https://vshopappdjango.herokuapp.com/api/products/add-comment/",
            data: {product:parseInt(props.match.params.id), content:comment, rating:stars.toString()},
            headers: { 
                Authorization: "Bearer " + access_token
            },
        })
        .then((res)=>{
            if(res.status===201){
                console.log(res);
                setSuccess4(true);
                setStars(0);
                setComment("");
                setTimeout(()=>{
                    setSuccess4(false);
                },2000)
            }
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }

    const handleImgClick = (x)=>{
        setMainImg(x)
    }

    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}
            {/* {props.match.params.id} */}
            <h1 className="whole">{data[0].name}</h1>
            <div>
                <img src={mainImg} alt="" className={styles.imgOval}></img>
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
                <span onClick={()=>{handleImgClick(data[0].picture1)}}><img src={data[0].picture1} alt="" className={styles.shortImg}></img></span>
                {data[0].picture2!==null?<span onClick={()=>{handleImgClick(data[0].picture2)}}><img src={data[0].picture2} alt="" className={styles.shortImg}></img></span>:<></>}
                {data[0].picture3!==null?<span onClick={()=>{handleImgClick(data[0].picture3)}}><img src={data[0].picture3} alt="" className={styles.shortImg}></img></span>:<></>}
                {data[0].picture4!==null?<span onClick={()=>{handleImgClick(data[0].picture4)}}><img src={data[0].picture4} alt="" className={styles.shortImg}></img></span>:<></>}

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
                <ReactStars size={32} count={5} isHalf= {true} edit= {true} onChange={ratingChanged}/>
                {/* <Stars edit={true} size={32}/> */}
                <Form.Control as="textarea" rows={4} placeholder="Your reviews" className={styles.textarea} onChange={(e)=>{setComment(e.target.value)}} />
                <Button className={styles.textAreaBtn} onClick={handleReviews}>Submit</Button>
                {success4?<Alert variant="success" onClose={()=>setSuccess4(false)} dismissible>
                    <p>Review added successfully. Thanks for your contribution.</p><Tick size={40} /> 
                </Alert>:<p></p>}
            </div>

            <div className={styles.reviewBlock}>
                <h1>Reviews</h1>
                {data[0].comment_product.map((comment)=>{
                    return(
                    <div className={styles.comment}>
                        <h3>{comment.author}</h3>
                        <Stars edit={false} rating={comment.rating}/>
                        <p>{comment.content}</p>
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
