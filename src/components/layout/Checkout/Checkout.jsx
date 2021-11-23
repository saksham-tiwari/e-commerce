import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { useUser } from "../../../contexts/UserContext";
import { useSetAuth } from '../../../contexts/AuthContext';



const Cart = () => {
  const history = useHistory();
    const isUser = useUser();
    const setAuth = useSetAuth();
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
        setAuth(false)
    },[])
  return (
    
    <div>
      <h1 className="whole">Checkout</h1>
      <hr className="hr-wish" />
      <Container>
        <Row>
          <Col>Item</Col>
          <Col xs lg="2">
            Qty
          </Col>
          <Col xs lg="2">
            Price
          </Col>
        </Row>
        <Row>
          <Col>Image and Product Desc</Col>
          <Col xs lg="2">
            1
          </Col>
          <Col xs lg="2">
            $300.00
          </Col>
        </Row>
        <Row>
          <Col>Image and Product Desc</Col>
          <Col xs lg="2">
            1
          </Col>
          <Col xs lg="2">
            $300.00
          </Col>
        </Row>
        <Row>
          <Col>Image and Product Desc</Col>
          <Col xs lg="2">
            1
          </Col>
          <Col xs lg="2">
            $300.00
          </Col>
        </Row>
        <Row>
          <Col>Image and Product Desc</Col>
          <Col xs lg="2">
            1
          </Col>
          <Col xs lg="2">
            $300.00
          </Col>
        </Row>
      </Container>
      <div style={{ width: "50%", marginLeft: "25%" }}>
        <Container>
          <Row>
            <Col>Subtotal</Col>
            <Col>$1,200.00</Col>
          </Row>
          <Row>
            <Col>Shipping Fee</Col>
            <Col>$0.00</Col>
          </Row>
          <Row>
            <Col>Promo Code</Col>
            <Col>-$0.00</Col>
          </Row>
          <Row>
            <Col>Tax</Col>
            <Col>$0.00</Col>
          </Row>
          <hr />
          <Row>
            <Col>Total</Col>
            <Col>$1,200.00</Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>Deliver to:</Col>
            <Col>
              XYZ
              <br />
              Address
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
