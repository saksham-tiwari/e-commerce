import React, { useEffect, useState } from 'react'
import CardCarousel from "../CardCarousel";
import Block from "../Block/CartBlock"
import styles from "./Cart.module.css"
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useUser } from '../../../contexts/UserContext';
import axios from 'axios';
import MyComponent from 'react-fullpage-custom-loader'

const Cart = () => {
    const history = useHistory();
    const [fullPageLoader, setFullPageLoader] = useState(false);

    const isUser = useUser();
    var access_token;
    const [data,setData] = useState([{
        product:{
            id: 0,
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
        },
        quantity: 1,
        price: 400
    }]);
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
            setData(res.data)
            console.log(res.data);
            setFullPageLoader(false);
        })
    },[])
    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">My Cart</h1>
            <hr className="hr-wish"/>

            {data.map((prod)=>{
                return (<Block id={prod.product.id} name={prod.product.name} price={prod.product.price} desc={prod.product.description} rating={prod.product.comment_product.rating} img={prod.product.picture1} quant={prod.quantity}/>)
            })}
            <br/>
            {/* <h3 className={styles.tot}>Cart Total:</h3> */}
            <Container className={styles.tot}>
                <Row>
                    <Col>Cart Total:</Col>
                    <Col>$100</Col>
                </Row>
                <Row>
                    <Col>Deliver to:</Col>
                    <Col>XYZ<br/>Address</Col>
                </Row>
            </Container>
            <Button className={styles.checkoutBtn}>Checkout</Button>

            
            <hr className="hr-wish"/>
            <br/>
            <h3>Frequently Bought Together</h3>
            <br/>

            <CardCarousel/>


        </div>
    )
}

export default Cart
