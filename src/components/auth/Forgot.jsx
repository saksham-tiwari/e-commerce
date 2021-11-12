import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap';

import globe from '../../assets/globe.svg'
import { validEmail } from './regex.jsx';
import axios from 'axios';
import { useSetEmail } from '../../contexts/EmailContext';


const Forgot = () => {

    
    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [alert1, setAlert1] = useState(false);
    const history = useHistory();
    const saveEmail = useSetEmail();
    const validate = async ()=>{
        if(email===""){
            alert("Email required.");
        }
        else if (!validEmail.test(email)) {
            alert("Your email is invalid. Must contain '@' and a domain.")
        } else{
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/email-verify/",{email})
            .then((res)=>{
                if(res.status===202){
                    saveEmail(email);
                    history.push("/otp");
                }
            })

        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

            <h2 className="chng">Forgot Password?</h2>

            {alert1?<Alert variant="danger" onClose={()=>setAlert1(false)} className="alert" dismissible>
                    Incorrect password
                    </Alert>:<p></p>}

            <Form className="chng-form">
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

    
                <Button variant="primary" size="lg" className="input-field btnsubmit" onClick={validate}>
                    Send Otp
                </Button>
            <div className="tnc">
                <p>By signing up, you agree with our <Link to="/tnc" className="link2">terms and conditions</Link></p>
            </div>
            </Form>
        </div>
    )
}

export default Forgot
