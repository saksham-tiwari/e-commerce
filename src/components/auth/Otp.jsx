import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap';

import globe from '../../assets/globe.svg'
import axios from 'axios';

const Otp = () => {

    let history = useHistory();

    const [otp, setOtp] = useState("");
    const [msg, setMsg] = useState("");
    const validate = ()=>{
        if(otp===""){
            alert("Please enter the otp.");
        }
        else {
            let stat;
            let otpInt = parseInt(otp);
            axios.post("https://vshopappdjango.herokuapp.com/api/Account/otp/verify/",{"otp":otpInt})
              .then((response)=> {
                console.log(response.status);
                stat=response.status;
                if(stat===202){
                    history.push("/")
                } 
              })
              .catch((error)=> {
                if(error.response.status===401){
                    setMsg("Incorrect OTP");
                }
              });
              
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 className="chng">Verification Page</h2>

            <Form className="chng-form">
                
                <h4>An otp has been sent to your mail. Pls verify the otp.</h4>
                
                {msg!==""?<Alert variant="danger" onClose={()=>setMsg("")} className="alert" dismissible>
                    {msg}
                    </Alert>:<p></p>}
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
                        value={otp}
                        placeholder="OTP"
                        onChange={(e)=>setOtp(e.target.value)}
                        />

                </div>
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