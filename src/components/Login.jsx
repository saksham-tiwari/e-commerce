import React from 'react';
import globe from '../assets/globe.svg';
import google from '../assets/google.svg'
import { Form, Button } from 'react-bootstrap';


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
            <form>
                <h2>Login to your Account</h2>
                <div class="input-icons input-field google-signin">
                    <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span class="google-span">Sign In with Google</span>
                    </a>
                </div>

                <hr className="rule"/><span className="rule-span">Sign In with Email</span><hr className="rule"/>

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
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login
