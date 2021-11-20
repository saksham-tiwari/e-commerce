import React, { useEffect, useState } from 'react'
import CardCarousel from "../CardCarousel";
import Block from "../Block/CartBlock"
import styles from "./Cart.module.css"
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useUser } from '../../../contexts/UserContext';
import axios from 'axios';
import MyComponent from 'react-fullpage-custom-loader'
import { useCart, useSetCart } from '../../../contexts/CartContext';

const Cart = () => {
    const history = useHistory();
    const [fullPageLoader, setFullPageLoader] = useState(false);
    const [sum,setSum] = useState(0);
    const cart = useCart();
    const setCart = useSetCart();

    const [user, setUser] = useState({
        email: "",
        name: "",
        dateOfBirth: null,
        gender: "",
        mobile: 0,
        picture: "",
        address: "",
        is_seller: false
    });

    const isUser = useUser();
    var access_token;
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
        setFullPageLoader(true);
        access_token= JSON.parse(localStorage.getItem('keys')).access
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
            console.log(res.data);
            for(let i=0; i<res.data.length;i++){
                priceSum+=  res.data[i].price;
                // setSum(sum+data[i].price)
            }
            setSum(priceSum);
            setFullPageLoader(false);
        })
        axios.get("https://vshopappdjango.herokuapp.com/api/Account/details/", {
        headers:{
            Authorization: "Bearer " + access_token
        }
        })
        .then((res)=>{
            setUser(res.data);
        })
    },[])

    const handleCheckout = ()=>{
        access_token= JSON.parse(localStorage.getItem('keys')).access
        console.log(sum)

        var fd = new FormData();
        fd.append("amount",sum);
        fd.append("payment_method","COD");
        fd.append("code","");

        axios({
            method:"post",
            url:"https://vshopappdjango.herokuapp.com/api/products/checkout-transaction/",
            // data: {amount:sum,payment_method:"COD",code:" "},
            data: fd,
            headers:{
                "Content-Type": "multipart/form-data", 
                Authorization: "Bearer " + access_token
            },
        })
        .then((res)=>{
            if(res.status===201){
                axios({
                    method:"put",
                    url:"https://vshopappdjango.herokuapp.com/api/products/order/checkout/",
                    headers:{
                        Authorization: "Bearer " + access_token
                    }
                })
                history.push(`/order-success/${res.data.txn_id}`)
            }
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">My Cart</h1>
            <hr className="hr-wish"/>

            {cart.map((prod)=>{
                return (<Block id={prod.product.id} name={prod.product.name} price={prod.product.price} desc={prod.product.description} rating={prod.product.comment_product.rating} img={prod.product.picture1} quant={prod.quantity} setSum={setSum}/>)
            })}
            <br/>
            {/* <h3 className={styles.tot}>Cart Total:</h3> */}
            <Container className={styles.tot}>
                <Row>
                    <Col>Cart Total:</Col>
                    <Col>&#8377;{sum}</Col>
                </Row>
                <Row>
                    <Col>Deliver to:</Col>
                    <Col>{user.name}<br/>{user.address}</Col>
                </Row>
            </Container>
            <Button className={styles.checkoutBtn} onClick={handleCheckout}>Checkout</Button>

            
            <hr className="hr-wish"/>
            <br/>
            <h3>Frequently Bought Together</h3>
            <br/>

            <CardCarousel/>


        </div>
    )
}

export default Cart
