import React, { useEffect, useState } from 'react';
import globe from '../../assets/globe.svg';
import google from '../../assets/google.svg'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { validEmail, validPassword } from './regex.jsx';
import { useUpdateUser } from "../../contexts/UserContext"
import { useSetEmail } from '../../contexts/EmailContext';
import { useSetAllow } from '../../contexts/AllowedContext';
import { useSetPush } from '../../contexts/PushContext';
import { useUpdateObject } from '../../contexts/ObjectContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'
import { useSetAuth } from '../../contexts/AuthContext';
import AuthService from "../../api/services/auth.service";



const Login = () => {

    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [pass, setPass] = useState("");
    const [passAlert, setPassAlert] = useState("");
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const saveEmail = useSetEmail();
    const setAllow = useSetAllow();
    const setPush = useSetPush();
    const createObj = useUpdateObject();


    // var tokens;

    const changeUser = useUpdateUser();
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
            alert("Your password is invalid. Must contain atleast a string and an integer. Should be atleast 6 characters long")
        }else {
            setLoader(true);
            let stat;
            await AuthService.LogIn({"email":email.trim(),"password":pass.trim()})
            .then((res)=>{
                stat=res.status;
                console.log(stat);
                if(stat===202){
                    AuthService.GetToken({"email":email.trim(),"password":pass.trim()})    
                    .then((res)=>{
                            // console.log(res.data);
                            localStorage.setItem("keys", JSON.stringify(res.data));
                            changeUser(true);
                            history.push("/");
                        })
                    
                }
            })
            .catch((err)=>{
                console.log(err);
                if(err.response.status===401){
                    setAlert1(true);
                    setLoader(false);
                    setTimeout(()=>{
                        setAlert1(false)
                    },2000)
                  }
                else if(err.response.status===503){
                    saveEmail(email);
                    setPush("signup");
                    setAllow();
                    createObj({email, password:pass});
                    history.push("/otp");
                }
                else if(err.response.status===406){
                    setAlert2(true)
                    setLoader(false);
                    setTimeout(()=>{
                        setAlert2(false)
                    },2000)
                }
            });
            
        }
    }
    function togglePassword(){
        setShowPass(!showPass);
    }
    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>
            <div>
            <h2 className="h2Auth">Login to your Account</h2>

            <Form>
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>

                {/* <div className="input-icons input-field google-signin">
                    <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <img src = {google} alt="googleicon"/>
                        <span className="google-span">Sign In with Google</span>
                    </a>
                </div> */}
                <div className="rule-div">
                    <hr className="rule"/>
                    <span className="hr-span">Sign In with Email</span>
                    <hr className="rule"/>
                </div>
                <br/>
                

                {alert1?(<Alert variant="danger" onClose={()=>setAlert1(false)} className="alert" dismissible>
                    Incorrect password
                    </Alert>):<p></p>}
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
                <p className="alerts">{passAlert} <span className="pass-hint">Hint <span  className="hiddentip">Password should be 8 characters long, should have a lower case, an upper case letter, a number and a special symbol. Should not contain any basic number patterns such as 1234 or 121 </span></span> </p>
                
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
