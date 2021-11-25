// import { style } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Col, Form, Row, Button, Alert } from 'react-bootstrap'
import styles from "./PersonalInfo.module.css"
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUpdateUser, useUser } from '../../../contexts/UserContext';
import { useHistory } from 'react-router';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'
// import userImg from "../../../assets/userImg.png"
import styles2 from "../Sidebar/Sidebar.module.css"
import {useSetAllow} from "../../../contexts/AllowedContext";
import { useSetEmail } from '../../../contexts/EmailContext';
import { useSetPush } from '../../../contexts/PushContext';
import { useSeller, useSetSeller } from '../../../contexts/SellerContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSetAuth } from '../../../contexts/AuthContext';
import { useSetPersonal, usePersonal } from '../../../contexts/PersonalContext';




const PersonalInfo = () => {
    let access_token;
    const updateUser = useUpdateUser();
    let history = useHistory();
    const [data, setData] = useState({});
    const [name, setName] = useState(true)
    const [gender, setGender] = useState(true)
    const [female, setFemale] = useState(false)
    const [male, setMale] = useState(false)
    const [others, setOthers] = useState(false)
    const [pno, setPno] = useState(true)
    const [fName, setFName] = useState("");
    const [submit, setSubmit] = useState(true);
    const [phone, setPhone] = useState();
    const [phoneAlert, setPhoneAlert] = useState("");
    
    const setPersonal = useSetPersonal();
    const personal = usePersonal();

    const setEmail = useSetEmail();
    const setPush = useSetPush();


    const isSeller= useSeller();

    const setSeller = useSetSeller();
    const isUser = useUser();

    const setAllow = useSetAllow();
    const setAuth = useSetAuth();


    useEffect(() => {
        setLoader(true);
        if(isUser){
            access_token= JSON.parse(localStorage.getItem("keys")).access;
            setAuth(false);
            xyz();

        } else{
            history.push("/")
        }
         
    }, [])
    var loaderCSS = css`
    ${'' /* color: #7c64ef; */}
    position: absolute;
    top: 5%;
    left: 33%;
    `

    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);



    function xyz(){
        axios.get("https://vshopappdjango.herokuapp.com/api/Account/details/", {
        headers:{
            Authorization: "Bearer " + access_token
        }
        })
        .then((res)=>{
            console.log(res.data)
            setPersonal(res.data);
            setEmail(res.data.email);
            if(res.data.gender==="F"){
                setFemale(true);
            }else if(res.data.gender==="M"){
                setMale(true);
            } else if(res.data.gender==="O"){
                setOthers(true);
            }
            if(res.data.is_seller){
                setSeller(true);
            }
            setLoader(false);
            // console.log(data);

        })
        .catch((err)=>{
            if(err.response.status===401){
                alert("Pls login.");
                localStorage.clear();
                updateUser(false);
                history.push("/");
            } else if(err.response.status===500){
                alert("Server error. Pls try after sometime.")
            }
        })
        }

    // let [firstN, lastN] = props.data.name.split(" ");
    // let lastN = props.data.name.substr(props.data.name.indexOf(' ')+1);

    // console.log(props.data.name);

        // if(data.gender==="Male"){
        //     // setGvalue(1);
        //     setMale(true);

        // }else {
        //     // setGvalue(2);
        //     setFemale(true);
        // }
    

    
    // const saveImg = (e)=>{
    //     setFile(e.target.files[0]);
    //     formData.append("picture", file)
    // }


    const handleSubmit = (event)=>{
        event.preventDefault();
        setLoader(true);
        var formData = new FormData(event.target);
        formData.append("is_seller",isSeller);
        access_token = JSON.parse(localStorage.getItem("keys")).access;
        // axios.put("https://vshopappdjango.herokuapp.com/api/Account/update-account/",{
        //     headers: { 
        //         // "Content-Type": "multipart/form-data", 
        //         Authorization: "Bearer " + access_token
        //     }
        // })

        axios({
            method: "put",
            url: "https://vshopappdjango.herokuapp.com/api/Account/update-account/",
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + access_token
             },
          })
            .then(function (response) {
              //handle success
              if(response.status===202){
                setLoader(false);
                setPersonal(response.data)
                setSuccess(true);
                setTimeout(()=>{
                    setSuccess(false);
                },3000)
              }
            })
            .catch(function (err) {
              //handle error
              if(err.response.status===500){
                  setLoader(false);
                  alert("Internal Server Error. Pls try again later.");

              }
            });

    }
    const sellerHandle=()=>{
        if(isUser){
            setLoader(true);
            // setEmail(data.email);
            axios.post("https://vshopappdjango.herokuapp.com/api/Account/email-verify/",{email:personal.email})
            .then((res)=>{
                if(res.status===202){
                    setAllow();
                    setPush("seller");
                    history.push("/otp")
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    let imgLink = personal.picture;
    // const genderCheck = (x)=>{
    //     setGvalue(x)
    //     // console.log(gvalue);
    // } 


    // formData.append('file', 'Chris');
    const logoutHandle = ()=>{
        localStorage.removeItem("keys"); 
        updateUser(false);
        window.location.reload();
    }

    const sellerCall = ()=>{
        history.push("/dashboard");
    }

    return (
        <div>
            <div className={styles2.sidebar}>
                    <div className={styles2.userCapsule}>
                        <img src={imgLink} alt="user" className={styles2.userImg}/>
                        <h5 className={styles2.username}>{personal.name}</h5>
                    </div>
                    <Button className={styles2.logoutBtn} onClick={logoutHandle}> <LogoutIcon/> LogOut</Button>
                    {/* <ul className={styles.list}>
                        <Link className={styles.listLinks}><li><ShoppingCartIcon className={styles.listIcons}/>My Orders</li></Link>
                        <Link className={styles.listLinks}><li><ShoppingBagIcon className={styles.listIcons}/>My Wishlist</li></Link>
                        <Link className={styles.listLinks}><li><LocalShippingIcon className={styles.listIcons}/>My Cart</li></Link>
                        <Link className={styles.listLinks}><li><CreditCardIcon className={styles.listIcons}/>My Transactions</li></Link>
                        <Link className={styles.listLinks}><li><ChatBubbleOutlineOutlinedIcon className={styles.listIcons}/>My Stuff</li></Link>
                        <Link className={styles.listLinks}><li><SettingsIcon className={styles.listIcons}/>Settings</li></Link>
                    </ul> */}
                    <div className={styles.sellerbtn}>
                    {!isSeller?<Button variant="success" onClick={sellerHandle}>Become Seller?</Button>:<Button variant="warning" onClick={sellerCall}>Seller Dashboard</Button>}
                    <label style={{marginLeft:"0", left:"0"}}></label>
                </div>
                    <h5 className={styles2.customerSupport}>Customer Support</h5>
                    <p className={styles2.customerSupportPara}>Ask you query , place requests or important issues. Our support team will contact 24/7 to you. </p>
            </div>

            <div className={styles.info}>
                <h3 style={{marginLeft:"20%"}}>Personal Information</h3>
                <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>

                <Form className={styles.infoForm} onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Label className={styles.label}>Name <EditIcon onClick={()=>{
                        setName(false) 
                        setSubmit(false)
                        }} /> </Form.Label>
                    <Row>
                        <Col>
                        <Form.Control name="name" placeholder="Name" value={name?personal.name:fName} className={styles.input} disabled={name} onChange={(e)=>{
                            setFName(e.target.value);
                        }} />
                        </Col>
                        {/* <Col>
                        <Form.Control placeholder="Last name" value={lName} className={styles.input} disabled={name} onChange={(e)=>{
                            setLName(e.target.value);
                        }}/>
                        </Col> */}
                    </Row>
                </Form.Group>
                <br/>

                {/* <div>
                    <label className={styles.label}>Upload Profile pic:</label>
                    <input type="file"/>
                </div> */}

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className={styles.label}>Upload Profile Pic</Form.Label>
                    <Form.Control 
                    name="picture" 
                    type="file" 
                    className={styles.input} 
                    onClick={()=>{setSubmit(false)}}

                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className={styles.label}>Gender <EditIcon onClick={()=>{
                        setGender(false) 
                        setSubmit(false)
                        }}/> </Form.Label>
                    <Form.Group key="inline-radio" className="mb-3">
                        <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            type="radio"
                            id="inline-radio-1"
                            value="M"
                            disabled={gender}
                            checked={male}

                            onClick={()=>{
                                // setGvalue(1) 
                                setMale(true)
                                setOthers(false)
                                setFemale(false)
                            }}

                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            type="radio"
                            id="inline-radio-2"
                            value="F"
                            disabled={gender}
                            checked={female}
                            onClick={()=>{
                                // setGvalue(2)
                                setMale(false)
                                setOthers(false)
                                setFemale(true)
                            }}

                        />
                        <Form.Check
                            inline
                            label="Others"
                            name="gender"
                            type="radio"
                            id="inline-radio-3"
                            value="O"
                            disabled={gender}
                            checked={others}
                            onClick={()=>{
                                // setGvalue(2)
                                setMale(false)
                                setOthers(true)
                                setFemale(false)
                            }}

                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles.label} >Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={personal.email} className={styles.input} disabled/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles.label}>Phone no. <EditIcon onClick={()=>{
                        setPno(false) 
                        setSubmit(false)
                        }}/></Form.Label>
                    <Form.Control name="mobile" type="number" placeholder="Enter Phone number" value={pno?personal.mobile:phone} className={styles.input} disabled={pno}  onChange={(e)=>{
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

                <Button type="submit" disabled={submit}>Submit</Button> 
                <Link to="forgot-password"><Button type="link" variant="secondary" className={styles.resetPass}>Reset password</Button></Link>

                {success?<Alert variant="success" onClose={()=>setSuccess(false)} className={styles.alertSuccess} dismissible>
                    Updated.
                </Alert>:<p></p>}



                </Form>
               
            </div>

        </div>
    )
}

export default PersonalInfo
