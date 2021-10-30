import React, {useState} from 'react';

import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import globe from '../assets/globe.svg'

const ChangePassword = () => {

    
    const [newPass, setNewPass] = useState("");
    const [confPass, setConfPass] = useState("");

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

        <h2 style={{marginLeft:"3%", top:"25%"}}>Change Password</h2>

        <Form style={{top: "40%"}}>
            <div class="input-icons">
                <i class="fa fa-lock icon lock">
            </i>
                <input class="input-field" 
                    type="password"
                    value={newPass}
                    placeholder="New Password"
                    onChange = {(e)=>setNewPass(e.target.value)}
                    />

            </div>
            <div class="input-icons">
                    <i class="fa fa-lock icon lock">
                </i>
                    <input class="input-field" 
                        type="password"
                        value = {confPass}
                        placeholder="Confirm Password"
                        onChange = {(e)=>setConfPass(e.target.value)}
                        />
                </div>
            <Button variant="primary" size="lg" className="input-field btnsubmit">
                Reset password
            </Button>
        </Form>
        </div>
    )
}

export default ChangePassword
