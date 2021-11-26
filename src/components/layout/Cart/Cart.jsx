import React, { useEffect, useState } from 'react'
import CardCarousel from "../CardCarousel";
import Block from "../Block/CartBlock"
import styles from "./Cart.module.css"
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useUser } from '../../../contexts/UserContext';
import MyComponent from 'react-fullpage-custom-loader'
import { useCart, useSetCart } from '../../../contexts/CartContext';
import { useSetAuth } from '../../../contexts/AuthContext';
import CartService from '../../../api/services/cart.service';
import UserService from '../../../api/services/user.service';


const Cart = () => {
    const history = useHistory();
    const [fullPageLoader, setFullPageLoader] = useState(false);
    const [sum,setSum] = useState(0);
    const cart = useCart();
    const setCart = useSetCart();
    const setAuth = useSetAuth();

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
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
        setAuth(false);
        setFullPageLoader(true);
        CartService.GetProducts()
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
        UserService.UserDetails()
        .then((res)=>{
            setUser(res.data);
        })
    },[])

    const handleCheckout = ()=>{
        console.log(sum)

        var fd = new FormData();
        fd.append("amount",sum);
        fd.append("payment_method","COD");
        fd.append("code","");

        CartService.Checkout(fd)
        .then((res)=>{
            if(res.status===201){
                CartService.Order()
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
            {cart.length!==0?<>
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

            </>:<h1>No products in cart</h1>}
            
            <hr className="hr-wish"/>
            <br/>
            <h3>Frequently Bought Together</h3>
            <br/>

            <CardCarousel/>


        </div>
    )
}

export default Cart
