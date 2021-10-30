import React from 'react';
import globe from '../assets/globe.svg';
import google from '../assets/google.svg'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>
            <div>
            {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
                Forgot Password
            </Form.Text>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> */}
            <h2>Login to your Account</h2>

            <Form>
                <div class="input-icons input-field google-signin">
                    <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span class="google-span">Sign In with Google</span>
                    </a>
                </div>

                <hr className="rule"/><span className="hr-span">Sign In with Email</span><hr className="rule"/>

                <br/>
                <br/>

                <div class="input-icons">
                    <i class="fa fa-envelope icon">
                </i>
                    <input class="input-field" 
                        type="email"
                        placeholder="Email"/>
                </div>
    
                <div class="input-icons">
                    <i class="fa fa-lock icon lock">
                </i>
                    <input class="input-field" 
                        type="password"
                        placeholder="Password"/>
                <Link to="/forgot-password" className="forgot">Forgot Password?</Link>

                </div>
                <Button variant="primary" size="lg" className="input-field btnsubmit">
                    Sign in
                </Button>
            </Form>

            <div className="donthave">
                <p>Don't have an account? <Link to="/signup" className="link2">Sign Up</Link></p>
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Login
