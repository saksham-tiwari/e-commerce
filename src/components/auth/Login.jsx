import React, { useState } from 'react';
import globe from '../../assets/globe.svg';
import google from '../../assets/google.svg'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';


const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const validate = ()=>{
        if(email===""){
            alert("Email required.");
        }
        else if(pass===""){
            alert("Password required.");
        }
        else if (!validEmail.test(email)) {
            alert("Your email is invalid. Must contain '@' and a domain.")
        }
        else if (!validPassword.test(pass)) {
            alert("Your password is invalid. Must contain an upper case, a lower case and a special character. Should be atleast 6 characters long")
        }
    }
    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>
            <div>
            <h2>Login to your Account</h2>

            <Form>
                <div className="input-icons input-field google-signin">
                    <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span className="google-span">Sign In with Google</span>
                    </a>
                </div>
                <div className="rule-div">
                    <hr className="rule"/>
                    <span className="hr-span">Sign In with Email</span>
                    <hr className="rule"/>
                </div>
                

                <br/>
                <br/>

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
                        value={pass}
                        placeholder="Password"
                        onChange={(e)=>setPass(e.target.value)}
                        />
                <Link to="/forgot-password" className="forgot">Forgot Password?</Link>

                </div>
                <Button variant="primary" size="lg" className="input-field btnsubmit" onClick = {validate}>
                    Sign in
                </Button>
                <div className="tnc">
                <p>Don't have an account? <Link to="/signup" className="link2">Sign Up</Link></p>
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </Form>
            {/* {emailErr && alert("Your email is invalid. Must contain '@' and should be atleast 6 characters long.</p>")}
            {pwdError && alert("Your password is invalid. Must contain an upper case, a lower case and a special character.")} */}
            
            </div>
        </div>
    )
}

export default Login
