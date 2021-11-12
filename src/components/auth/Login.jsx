import React, { useState } from 'react';
import globe from '../../assets/globe.svg';
import google from '../../assets/google.svg'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';
import axios from 'axios';
import { useUpdateUser } from "../../contexts/UserContext"



const Login = () => {

    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [pass, setPass] = useState("");
    const [passAlert, setPassAlert] = useState("");
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);

    // var tokens;

    const changeUser = useUpdateUser();


    let history = useHistory();

    const validate = async ()=>{
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
        }else {
            let stat;
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/login/",{"email":email.trim(),"password":pass.trim()})
            .then((res)=>{
                stat=res.status;
                console.log(stat);
                if(stat===401){
                    alert("Incorrect Pass");

                    history.push("/");
                }
                else if(stat===202){
                    axios.post("https://vshopappdjango.herokuapp.com/api/token/",{"email":email.trim(),"password":pass.trim()})
                    .then((res)=>{
                        // console.log(res.data);
                        localStorage.setItem("keys", JSON.stringify(res.data));
                        changeUser();
                        history.push("/");
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
                if(err.response.status===401){
                    setAlert1(true);
                  }
                else if(err.response.status===406){
                    setAlert2(true)
                }
            });
            
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
                

                {alert1?<Alert variant="danger" onClose={()=>setAlert1(false)} className="alert" dismissible>
                    Incorrect password
                    </Alert>:<p></p>}
                {alert2?<Alert variant="danger" onClose={()=>setAlert2(false)} className="alert" dismissible>
                    No account exist with this email Id. Try <Link to="signup">Signing Up.</Link>
                    </Alert>:<p></p>}

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
                <p className="alerts">{passAlert}</p>
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
