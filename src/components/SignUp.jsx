import React from 'react'
import globe from '../assets/globe.svg';
import google from '../assets/google.svg'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div>
            <img src = {globe} alt="globe" className="globe"/>
            <div>
            <h2>Create your Account</h2>

            <Form>
                <div class="input-icons input-field google-signin">
                    <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span class="google-span">Sign Up with Google</span>
                    </a>
                </div>

                <hr className="rule"/><span className="hr-span">Sign Up with Email</span><hr className="rule"/>

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
                </div>
                <div class="input-icons">
                    <i class="fa fa-lock icon lock">
                </i>
                    <input class="input-field" 
                        type="password"
                        placeholder="Confirm Password"/>
                </div>
                <Button variant="primary" size="lg" className="input-field btnsubmit">
                    Sign Up
                </Button>
            </Form>

            <div className="donthave">
                <p>Already have have an account? <Link to="/login" className="link2">Login</Link></p>
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
