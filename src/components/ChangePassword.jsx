import React from 'react';

import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import globe from '../assets/globe.svg'

const ChangePassword = () => {
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
                    placeholder="New Password"/>

            </div>
            <div class="input-icons">
                    <i class="fa fa-lock icon lock">
                </i>
                    <input class="input-field" 
                        type="password"
                        placeholder="Confirm Password"/>
                </div>
            <Button variant="primary" size="lg" className="input-field btnsubmit">
                Reset password
            </Button>
        </Form>
        </div>
    )
}

export default ChangePassword
