import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import gif from "../../../assets/success.gif"
import { useSetAuth } from '../../../contexts/AuthContext'
const OrderSuccess = (props) => {
    const setAuth = useSetAuth();
    useEffect(()=>{
        setAuth(false);
    })
    return (
        <div>
            <img src={gif} alt="success gif" style={{width:"30%", marginLeft:"35%"}}/>
            <div style={{marginLeft:"20%", marginTop:"20px"}}>
                <h1>Order Successful</h1>
                <h3>Transaction ID: {props.match.params.txn_id}</h3>
            </div>
        </div>
    )
}

export default withRouter(OrderSuccess)
