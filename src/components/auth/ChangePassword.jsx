import axios from 'axios';
import React, {useState} from 'react';

import { Form, Button } from 'react-bootstrap';

import globe from "../../assets/globe.svg"
import { validPassword } from './regex.jsx';
import { useEmail, useSetEmail } from '../../contexts/EmailContext';
import { useUpdateUser } from '../../contexts/UserContext';
import { useHistory } from 'react-router';


const ChangePassword = () => {

    
    const [newPass, setNewPass] = useState("");
    const [newPassAlert, setNewPassAlert] = useState(""); 

    const [confPass, setConfPass] = useState("");
    const [confPassAlert, setConfPassAlert] = useState("");
    const email = useEmail();
    const setEmail = useSetEmail();
    const setUserStat = useUpdateUser();

    const history = useHistory();

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
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/reset-password/change-password/",{email,"new password": newPass})
            .then((res)=>{
                if(res.status===202){
                    setEmail("");
                    setUserStat();
                    history.push("/");
                }
            })
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

        <h2 className="chng">Change Password</h2>

        <Form className="chng-form">
            <div className="input-icons">
                <i className="fa fa-lock icon lock">
            </i>
                <input className="input-field" 
                    type="password"
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

            </div>
            <p className="alerts">{newPassAlert}</p>
            <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
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
