import React from 'react'
import CardCarousel from "../CardCarousel";
import Block from "../Block/CartBlock"
import styles from "./Cart.module.css"
import { Col, Container, Row, Button } from 'react-bootstrap';

const Cart = () => {
    return (
        <div>
            <h1 className="whole">My Bag</h1>
            <hr className="hr-wish"/>
            <Block rating={3}/>
            <Block rating={5}/>
            <Block rating={2}/>
            <Block rating={4}/>
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
