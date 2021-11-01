import React, {useState} from 'react'
import globe from "../../assets/globe.svg";
import google from '../../assets/google.svg'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("2000-01-01")
    const [pass, setPass] = useState("");
    const [newPass, setNewPass] = useState(""); 


    const validate = ()=>{
        if(email===""){
            alert("Email required.");
        }
        else if(pass===""){
            alert("Password required.");
        }
        else if(newPass===""){
            alert("Confirm password required");
        }
        else if (!validEmail.test(email)) {
            alert("Your email is invalid. Must contain '@' and a domain.")
        }
        else if (!validPassword.test(pass)) {
            alert("Your password is invalid. Must contain an upper case, a lower case and a special character. Should be atleast 6 characters long")
        }
        else if(pass!==newPass){
            alert("Passwords do not match");
        }
    }

    return (
        <div>
            <div>
            <img src = {globe} alt="globe" className="globe"/>
            <div>
            <h2>Create your Account</h2>

            <Form>
                <div className="input-icons input-field google-signin">
                    <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span className="google-span">Sign Up with Google</span>
                    </a>
                </div>

                <div className="rule-div">
                    <hr className="rule"/>
                    <span className="hr-span">Sign Up with Email</span>
                    <hr className="rule"/>
                </div>

                <br/>
                <br/>

                <div className="input-icons">
                <i class="fa fa-user icon"></i>
                    <input className="input-field" 
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e)=>setName(e.target.value)}
                        />
                </div>
                
                <label for="dob">Date of Birth:</label>
                <div className="input-icons">
                <i class="fa fa-calendar icon"></i>
                    <input className="input-field" 
                        type="date"
                        value={dob}
                        onChange={(e)=>setDOB(e.target.value)}
                        />
                </div>

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
                </div>
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
                        value={newPass}
                        placeholder="Confirm Password"
                        onChange={(e)=>setNewPass(e.target.value)}
                        />
                </div>
                
                <Button variant="primary" size="lg" className="input-field btnsubmit" onClick={validate}>
                    Sign Up
                </Button>
                <div className="tnc">
                <p>Already have have an account? <Link to="/login" className="link2">Login</Link></p>
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
                </div>
            </Form>

            
            </div>
        </div>
        </div>
    )
}

export default SignUp
