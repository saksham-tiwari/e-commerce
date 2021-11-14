import { style } from '@mui/system'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import styles from "./PersonalInfo.module.css"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


const PersonalInfo = () => {

    var formData = new FormData();
    const [name, setName] = useState(true)
    const [gender, setGender] = useState(true)
    const [pno, setPno] = useState(true)
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [gvalue, setGvalue] = useState(1);
    const [phone, setPhone] = useState();
    const [phoneAlert, setPhoneAlert] = useState("");

    const [file, setFile] = useState(null);

    const saveImg = (e)=>{
        setFile(e.target.files[0]);
        formData.append("profile", file)
    }

    const genderCheck = (x)=>{
        setGvalue(x)
        console.log(gvalue);
    } 


    // formData.append('file', 'Chris');
    return (
        <div>
            <div className={styles.info}>
                <h3 style={{marginLeft:"20%"}}>Personal Information</h3>
                <Form className={styles.infoForm}>

                <Form.Group>
                    <Form.Label className={styles.label}>Name <EditIcon onClick={()=>{setName(false)}} /> </Form.Label>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" value={fName} className={styles.input} disabled={name} onChange={(e)=>{
                            setFName(e.target.value);
                        }} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" value={lName} className={styles.input} disabled={name} onChange={(e)=>{
                            setLName(e.target.value);
                        }}/>
                        </Col>
                    </Row>
                </Form.Group>
                <br/>

                {/* <div>
                    <label className={styles.label}>Upload Profile pic:</label>
                    <input type="file"/>
                </div> */}

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className={styles.label}>Upload Profile Pic</Form.Label>
                    <Form.Control type="file" className={styles.input} onChange={saveImg}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className={styles.label}>Gender <EditIcon onClick={()=>{setGender(false)}}/> </Form.Label>
                    <div key="inline-radio" className="mb-3">
                        <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type="radio"
                            id="inline-radio-1"
                            disabled={gender}
                            onClick={()=>genderCheck(1)}

                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type="radio"
                            id="inline-radio-2"
                            disabled={gender}
                            onClick={()=>genderCheck(2)}

                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles.label} >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value="sak@gmail.com" className={styles.input} disabled/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles.label}>Phone no. <EditIcon onClick={()=>{setPno(false)}}/></Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone number" value={phone} className={styles.input} disabled={pno}  onChange={(e)=>{
                            setPhone(e.target.value);
                            if(e.target.value===""){
                                setPhoneAlert("Phone number is empty.");
                            }
                            else if(phone<100000000||phone>999999999){
                                setPhoneAlert("Enter a valid phone number");
                            } 
                            else{
                                setPhoneAlert("");
                            }
                            }}/>
                            <p className="alerts">{phoneAlert}</p>
                </Form.Group>

                <Link to="forgot-password"><button>Reset password</button></Link>


                </Form>
                <div className={styles.sellerbtn}>
                    <button>Become Seller?</button>
                    <label style={{marginLeft:"0", left:"0"}}>Know more...</label>
                </div>
            </div>

        </div>
    )
}

export default PersonalInfo
