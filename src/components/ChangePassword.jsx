import React, {useState} from 'react';

import { Form, Button } from 'react-bootstrap';

import globe from '../assets/globe.svg'
import { validPassword } from './regex.jsx';


const ChangePassword = () => {

    
    const [newPass, setNewPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const validate = ()=>{
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
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

        <h2 style={{marginLeft:"3%", top:"25%"}}>Change Password</h2>

        <Form style={{top: "40%"}}>
            <div className="input-icons">
                <i className="fa fa-lock icon lock">
            </i>
                <input className="input-field" 
                    type="password"
                    value={newPass}
                    placeholder="New Password"
                    onChange = {(e)=>setNewPass(e.target.value)}
                    />

            </div>
            <div className="input-icons">
                    <i className="fa fa-lock icon lock">
                </i>
                    <input className="input-field" 
                        type="password"
                        value = {confPass}
                        placeholder="Confirm Password"
                        onChange = {(e)=>setConfPass(e.target.value)}
                        />
                </div>
            <Button variant="primary" size="lg" className="input-field btnsubmit" onClick={validate}>
                Reset password
            </Button>
        </Form>
        </div>
    )
}

export default ChangePassword
