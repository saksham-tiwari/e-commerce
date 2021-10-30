import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import globe from '../assets/globe.svg'

const Forgot = () => {

    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 style={{marginLeft:"3%", top:"25%"}}>Forgot Password?</h2>

            <Form style={{top: "40%"}}>
                <div class="input-icons">
                    <i class="fa fa-envelope icon">
                </i>
                    <input class="input-field" 
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </div>
    
                <div class="input-icons">
                    <i class="fa fa-lock icon lock">
                </i>
                    <input class="input-field" 
                        type="password"
                        value={otp}
                        placeholder="OTP"
                        onChange={(e)=>setOtp(e.target.value)}
                        />

                </div>
                <Button variant="primary" size="lg" className="input-field btnsubmit">
                    Confirm
                </Button>
            </Form>
            <div className="donthave">
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
        </div>
    )
}

export default Forgot
