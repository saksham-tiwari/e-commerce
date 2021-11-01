import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import globe from '../../assets/globe.svg'
import { validEmail } from './regex.jsx';


const Forgot = () => {

    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const validate = ()=>{
        if(email===""){
            alert("Email required.");
        }
        else if(otp===""){
            alert("Please enter the otp.");
        }
        else if (!validEmail.test(email)) {
            alert("Your email is invalid. Must contain '@' and a domain.")
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 className="chng">Forgot Password?</h2>

            <Form className="chng-form">
                <div className="input-icons">
                    <i className="fa fa-envelope icon">
                </i>
                    <input className="input-field" 
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </div>
    
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
                    Confirm
                </Button>
            <div className="tnc">
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </Form>
        </div>
    )
}

export default Forgot
