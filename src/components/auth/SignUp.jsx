import React, {useEffect, useState} from 'react'
import globe from "../../assets/globe.svg";
import google from '../../assets/google.svg'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link ,useHistory } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';
import axios from "axios"
import { useUpdateObject } from '../../contexts/ObjectContext';
import { useSetPush } from '../../contexts/PushContext';
import { useSetAllow } from '../../contexts/AllowedContext';
import { useSetEmail } from '../../contexts/EmailContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'
import { useSetAuth } from '../../contexts/AuthContext';



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
    const [showPass, setShowPass] = useState(false);
    const [showConfPass, setShowConfPass] = useState(false);

    var loaderCSS = css`
        ${'' /* color: #7c64ef; */}
        position: absolute;
        top: 15%;
        left: 33%;

    `

    const [loader, setLoader] = useState(false);

    const setAuth = useSetAuth();
    useEffect(()=>{
        setAuth(true);
    },[])


    function togglePassword(){
        setShowPass(!showPass);
    }
    function toggleConfPassword(){
        setShowConfPass(!showConfPass);
    }

    const createObj = useUpdateObject();
    const setPush = useSetPush();
    const setAllow = useSetAllow();
    const saveEmail = useSetEmail();


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
            setLoader(true);

            const user={
                email:email.trim(),
                password:pass.trim(),
                name: name.trim()
            }
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/create-account/", user)
            .then(()=>{
                createObj({email,password:pass})
                setPush("signup")
                saveEmail(email);
                setAllow();
                history.push("/otp");
            }).catch((err)=>{
                if(err.response.status===401){
                    setAlert1(true);
                    setLoader(false);
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
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>

                {/* <div className="input-icons input-field google-signin">
                    <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span className="google-span">Sign Up with Google</span>
                    </a>
                </div> */}

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
                        type={showPass?"text":"password"}
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
                {showPass?<VisibilityIcon onClick={togglePassword} className="eye"/>:<VisibilityOffIcon onClick={togglePassword} className="eye"/>}

                </div>
                <p className="alerts">{passAlert}</p>
                <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type={showConfPass?"text":"password"}
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
                    {showConfPass?<VisibilityIcon onClick={toggleConfPassword} className="eye"/>:<VisibilityOffIcon onClick={toggleConfPassword} className="eye"/>}

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
