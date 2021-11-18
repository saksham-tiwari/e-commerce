import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {Link, withRouter} from "react-router-dom"
import styles from "./Product.module.css"
import Stars from "../Stars/Stars"

const Product = (props) => {
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
    var img1;
    useEffect(()=>{
        // console.log(props.match.params.id)
        axios.get("https://vshopappdjango.herokuapp.com/api/products/")
        .then((res)=>{
            setData(res.data.filter(prod=>prod.id==props.match.params.id));
            console.log(res.data.filter(prod=>prod.id==props.match.params.id));
            img1= data[0].picture1

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

    const handleCartClick = ()=>{
        console.log("clicked");
    }
    const handleWishClick = ()=>{
        console.log("clicked");
    }

    return (
        <div>
            {/* {props.match.params.id} */}
            <h1 className="whole">{data[0].name}</h1>
            <div>
                <img src={data[0].picture1} alt="" className={styles.imgOval}></img>
            </div>
            <div className={styles.priceBox}>
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
                <Button className={styles.btnOrder}>Buy Now!</Button>

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
