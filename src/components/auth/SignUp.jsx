import React, {useState} from 'react'
import globe from "../../assets/globe.svg";
import google from '../../assets/google.svg'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link ,useHistory } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';
import axios from "axios"


const SignUp = () => {

    const [name, setName] = useState("");
    const [nameAlert, setNameAlert] = useState("");
    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");

    const [dob, setDOB] = useState("2000-01-01")
    const [pass, setPass] = useState("");
    const [passAlert, setPassAlert] = useState("");

    const [newPass, setNewPass] = useState(""); 
    const [newPassAlert, setNewPassAlert] = useState("");
    const [alert1, setAlert1] = useState(false);



    let history = useHistory();

    const validate = async ()=>{
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
        else{
            const user={
                email:email.trim(),
                password:pass.trim(),
                name: name.trim()
            }
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/create-account/", user)
            .then(()=>{
                history.push("/otp");
            }).catch((err)=>{
                if(err.response.status===401){
                    setAlert1(true);
                }
            });
            
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
                {alert1?<Alert variant="danger" onClose={()=>setAlert1(false)} className="alert" dismissible>
                    Account already exists with this email ID. Try <Link to="/login">Logging in</Link>
                    </Alert>:<p></p>}

                <div className="input-icons">
                <i className="fa fa-user icon"></i>
                    <input className="input-field" 
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e)=>{
                            setName(e.target.value)
                            if(e.target.value===""){
                                setNameAlert("Name is required.");
                            }
                            else{
                                setNameAlert("");
                            }
                            }}
                            
                        />
                </div>
                <p className="alerts">{nameAlert}</p>
                <label htmlFor="dob">Date of Birth:</label>
                <div className="input-icons">
                <i className="fa fa-calendar icon"></i>
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
                        onChange={(e)=>{
                            setEmail(e.target.value);
                            if(e.target.value===""){
                                setEmailAlert("Email is required.");
                            }
                            else if(!validEmail.test(e.target.value)){
                                setEmailAlert("Enter a valid email");
                            } 
                            else{
                                setEmailAlert("");
                            }
                            }}
                        />
                </div>
                <p className="alerts">{emailAlert}</p>
    
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
                        value={pass}
                        placeholder="Password"
                        onChange={(e)=>{
                            setPass(e.target.value)
                            if(e.target.value===""){
                                setPassAlert("Password is required.");
                            }
                            else if(!validPassword.test(e.target.value)){
                                setPassAlert("Enter a valid password");
                            } 
                            else{
                                setPassAlert("");
                            }
                            }}
                        />
                </div>
                <p className="alerts">{passAlert}</p>
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
                        value={newPass}
                        placeholder="Confirm Password"
                        onChange={(e)=>{
                            setNewPass(e.target.value)
                            if(e.target.value===""){
                                setNewPassAlert("Confirmation Password is required.");
                            }
                            else if(e.target.value!==pass){
                                setNewPassAlert("Passwords do not match");
                            } 
                            else{
                                setNewPassAlert("");
                            }
                            }}
                    />
                </div>
                <p className="alerts">{newPassAlert}</p>
                
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
