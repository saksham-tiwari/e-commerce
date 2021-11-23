import axios from 'axios';
import React, {useEffect, useState} from 'react';

import { Form, Button } from 'react-bootstrap';

import globe from "../../assets/globe.svg"
import { validPassword } from './regex.jsx';
import { useEmail, useSetEmail } from '../../contexts/EmailContext';
import { useUpdateUser } from '../../contexts/UserContext';
import { useHistory } from 'react-router';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'

import { useSetAuth } from '../../contexts/AuthContext';



const ChangePassword = () => {

    
    const [newPass, setNewPass] = useState("");
    const [newPassAlert, setNewPassAlert] = useState(""); 

    const [confPass, setConfPass] = useState("");
    const [confPassAlert, setConfPassAlert] = useState("");
    const email = useEmail();
    const setEmail = useSetEmail();
    const setUserStat = useUpdateUser();
    const [showPass, setShowPass] = useState(false);
    const [showConfPass, setShowConfPass] = useState(false);
    
    var loaderCSS = css`
    ${'' /* color: #7c64ef; */}
    position: absolute;
    top: -10%;
    left: 33%;

`

    const [loader, setLoader] = useState(false);


    const history = useHistory();

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

    const validate = async ()=>{
        if(newPass===""){
            alert("Password required.");
        }
        else if(confPass===""){
            alert("Confirm Password required");
        }
        else if (!validPassword.test(newPass)) {
            alert("Your password is invalid. Must contain an upper case, a lower case and a special character. Should be atleast 6 characters long")
        }
        else if(newPass !== confPass){
            alert("Passwords do not match")
        } else{
            setLoader(true);
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/reset-password/change-password/",{email,"new password": newPass})
            .then((res)=>{
                if(res.status===202){
                    const obj = { email, password:newPass}
                    setEmail("");
                    axios.post("https://vshopappdjango.herokuapp.com/api/token/",obj)
                    .then((res)=>{
                        // console.log(res.data);
                        localStorage.setItem("keys", JSON.stringify(res.data));
                        // changeUser();
                        // changeObj({});
                        setUserStat(true);

                        history.push("/");
                    })
                    // history.push("/");
                    // setLoader(false)
                }
            })
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

        <h2 className="chng">Change Password</h2>

        <Form className="chng-form">
        <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>
        
            <div className="input-icons">
                <i className="fa fa-lock icon lock">
            </i>
                <input className="input-field" 
                    type={showPass?"text":"password"}
                    value={newPass}
                    placeholder="New Password"
                    onChange={(e)=>{
                            setNewPass(e.target.value)
                            if(e.target.value===""){
                                setNewPassAlert("Password is required.");
                            }
                            else if(!validPassword.test(e.target.value)){
                                setNewPassAlert("Enter a valid password");
                            } 
                            else{
                                setNewPassAlert("");
                            }
                            }} 
                    />
                {showPass?<VisibilityIcon onClick={togglePassword} className="eye"/>:<VisibilityOffIcon onClick={togglePassword} className="eye"/>}


            </div>
            {/* <p className="alerts">{newPassAlert}</p> */}
            <p className="alerts">{newPassAlert} <div className="pass-hint">Hint <span  className="hiddentip">Password should be 8 characters long, should have a lower case, an upper case letter, a number and a special symbol. Should not contain any basic number patterns such as 1234 or 121 </span></div> </p>

            <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type={showConfPass?"text":"password"}

                        value = {confPass}
                        placeholder="Confirm Password"
                        onChange={(e)=>{
                            setConfPass(e.target.value)
                            if(e.target.value===""){
                                setConfPassAlert("Confirmation Password is required.");
                            }
                            else if(e.target.value!==newPass){
                                setConfPassAlert("Passwords do not match");
                            } 
                            else{
                                setConfPassAlert("");
                            }
                            }}
                        />
                    {showConfPass?<VisibilityIcon onClick={toggleConfPassword} className="eye"/>:<VisibilityOffIcon onClick={toggleConfPassword} className="eye"/>}

                </div>
            <p className="alerts">{confPassAlert}</p>
            <Button variant="primary" size="lg" className="input-field btnsubmit" onClick={validate}>
                Reset password
            </Button>
        </Form>
        </div>
    )
}

export default ChangePassword
