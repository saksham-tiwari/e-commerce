import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap';

import globe from '../../assets/globe.svg'
import { validEmail } from './regex.jsx';
import axios from 'axios';
import { useSetEmail } from '../../contexts/EmailContext';
import { useSetPush } from '../../contexts/PushContext';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'
import { useSetAllow } from '../../contexts/AllowedContext';





const Forgot = () => {

    
    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [alert1, setAlert1] = useState(false);
    const history = useHistory();
    const saveEmail = useSetEmail();
    const setPush = useSetPush();
    const setAllow = useSetAllow();
    // const [alert2, setAlert2] = useState(false);

    var loaderCSS = css`
        ${'' /* color: #7c64ef; */}
        position: absolute;
        top: -10%;
        left: 33%;

    `

    const [loader, setLoader] = useState(false);

    const validate = async (e)=>{
        e.preventDefault();
        if(email===""){
            alert("Email required.");
        }
        else if (!validEmail.test(email)) {
            alert("Your email is invalid. Must contain '@' and a domain.")
        } else{
            setLoader(true);
            await axios.post("https://vshopappdjango.herokuapp.com/api/Account/email-verify/",{email})
            .then((res)=>{
                if(res.status===202){
                    saveEmail(email);
                    setPush("forgot");
                    setAllow();
                    history.push("/otp");
                } 
            })
            .catch((err)=>{
                if(err.response.status===406){
                    setAlert1(true);
                    setLoader(false);

                }
            }
            )
        }
    }

    return (
        <div>
            <img src = {globe} alt="globe" className="globe"/>

           
            <h2 className="chng">Forgot Password?</h2>
            
            

            <Form className="chng-form">
            
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>
            {alert1?(<Alert variant="danger" onClose={()=>setAlert1(false)} className="alert" dismissible>
                    User does not exist. Pls <Link to="signup">Signup</Link>
                    </Alert>):<p></p>}
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
