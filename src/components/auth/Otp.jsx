import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap';

import globe from '../../assets/globe.svg'
import axios from 'axios';
import { useUpdateUser } from '../../contexts/UserContext';
import { useEmail } from '../../contexts/EmailContext';
import { useObject, useUpdateObject } from '../../contexts/ObjectContext';
import { usePush } from '../../contexts/PushContext';
import { useAllow, useSetAllow } from '../../contexts/AllowedContext';
import { useSetSeller } from '../../contexts/SellerContext';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'
import { useSetAuth } from '../../contexts/AuthContext';


const Otp = () => {

    let history = useHistory();


    const isAllowed=useAllow();
    const setAllow= useSetAllow();
    const setSeller = useSetSeller();
    const setAuth = useSetAuth();
    // var access_token;
    useEffect(() => {
        if(isAllowed){
            setAllow();
            setAuth(true);
            // access_token= JSON.parse(localStorage.getItem("keys")).access;
        }
        else{
            history.push("/login");
        }
    }, [])


    const [otp, setOtp] = useState("");
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const changeUser=useUpdateUser();
    const email = useEmail();
    const push = usePush();
    const obj = useObject();
    const changeObj = useUpdateObject();
    var loaderCSS = css`
        ${'' /* color: #7c64ef; */}
        position: absolute;
        top: -10%;
        left: 33%;

    `

    const [loader, setLoader] = useState(false);


    async function resendOtp(){
        setLoader(true);
        console.log(email)
        await axios.post("https://vshopappdjango.herokuapp.com/api/Account/email-verify/", {"email":email.trim()} )
        .then((res)=>{
            if(res.status===202){
                setSuccess(true);
                setLoader(false);
            } 
        })
    }

    const validate = ()=>{
        if(otp===""){
            alert("Please enter the otp.");
        }
        else {
            setLoader(true);
            let stat;
            let otpInt = parseInt(otp);
            axios.post("https://vshopappdjango.herokuapp.com/api/Account/otp/verify/",{"otp":otpInt, "email":email.trim()})
              .then((response)=> {
                console.log(response.status);
                stat=response.status;
                if(stat===202){
                    changeUser();
                    if(push==="signup"){
                        axios.post("https://vshopappdjango.herokuapp.com/api/token/",obj)
                        .then((res)=>{
                            // console.log(res.data);
                            localStorage.setItem("keys", JSON.stringify(res.data));
                            // changeUser();
                            changeObj({});
                            changeUser(true);

                            history.push("/");
                        })
                        // history.push("/")
                    } else if(push === "forgot"){
                        history.push("/change-password")
                    } else if(push==="seller"){
                        let access_token = JSON.parse(localStorage.getItem("keys")).access;
                        // axios.put("https://vshopappdjango.herokuapp.com/api/Account/become-seller/",{
                        //     headers:{
                        //         Authorization: "Bearer " + access_token
                        //     }
                        //     })
                        //     .then((res)=>{
                        //         if(res.status===200){
                        //             history.push("/")
                        //         }
                        //     })

                        axios({
                            method: "put",
                            url: "https://vshopappdjango.herokuapp.com/api/Account/become-seller/",
                            headers: { 
                                Authorization: "Bearer " + access_token
                                },
                            })
                            .then((res)=> {
                                //handle success
                                if(res.status===200){
                                    setSeller(true);
                                    changeUser(true);
                                    history.push("/")

                                }
                            })
                    }
                    // history.push("/")

                } 
              })
              .catch((error)=> {
                if(error.response.status===401){
                    setMsg("Incorrect OTP");
                    setLoader(false);
                }
              });
              
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 className="chng">Verification Page</h2>

            <Form className="chng-form">
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>

                
                <h4>An otp has been sent to your mail. Please verify the otp.</h4>
                
                {msg!==""?<Alert variant="danger" onClose={()=>setMsg("")} className="alert" dismissible>
                    {msg}
                    </Alert>:<p></p>}
                {success?<Alert variant="success" onClose={()=>setSuccess(false)} className="alert" dismissible>
                    Otp resent!
                </Alert>:<p></p>}
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="text"
                        value={otp}
                        placeholder="OTP"
                        onChange={(e)=>setOtp(e.target.value)}
                        />

                </div>
                {/* <Button style={{display:"block"}} onClick={resendOtp}>Resend OTP</Button> */}
                <p className="forgot" onClick={resendOtp} type="button">Resend OTP</p>

                <Button variant="primary" size="lg" className="input-field btnsubmit" onClick={validate}>
                    Verify
                </Button>
            <div className="tnc">
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </Form>
        </div>
    )
}

export default Otp
