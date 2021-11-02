import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import globe from '../../assets/globe.svg'

const Otp = () => {

    const [otp, setOtp] = useState("");
    const validate = ()=>{
        if(otp===""){
            alert("Please enter the otp.");
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 className="chng">Verification Page</h2>

            <Form className="chng-form">
                
                <h4>An otp has been sent to your mail. Pls verify the otp.</h4>
    
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
