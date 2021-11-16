import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router'
import styles from './AddProducts.module.css'
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react'



const AddProducts = () => {

    var access_token;
    const history = useHistory();

    var loaderCSS = css`
    ${'' /* color: #7c64ef; */}
    position: absolute;
    top: 5%;
    left: 33%;
    `

    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("keys")===null){
            history.push("/");
        } else{
            access_token= JSON.parse(localStorage.getItem("keys")).access
        }
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoader(true);
        access_token = JSON.parse(localStorage.getItem("keys")).access;

        // console.log(e.target);
        var fd = new FormData(e.target);
        axios({
            method: "post",
            url: "https://vshopappdjango.herokuapp.com/api/products/add-product/",
            data: fd,
            headers: { 
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + access_token
             },
          }).then((response)=> {
              //handle success
              if(response.status===200){
                setLoader(false);
                setSuccess(true);
              }
                
            }).catch((err)=> {
              //handle error
              if(err.response.status===500){
                  setLoader(false);
                  alert("Internal Server Error. Pls try again later.");

              }
            });
    }

    return (
        <div className={styles.block}>
            <h1 className={styles.head}>Product Information</h1>
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>

            <Form className={styles.addForm} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className={styles.label}>Product Name</Form.Label>
                    <Form.Control name="name" placeholder="Product Name" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className={styles.label}>Product Price</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Price in rs." required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className={styles.label}>Brand Name</Form.Label>
                    <Form.Control name="brand" placeholder="Brand Name" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className={styles.label}>Product Description</Form.Label>
                    <Form.Control name="description" placeholder="Product Description" required></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label className={styles.label}>Add Images of the Product. Min 1 image is required and you can add upto 4 images.</Form.Label>
                    <Form.Control name="picture1" type="file" required/>
                    <Form.Control name="picture2" type="file"/>
                    <Form.Control name="picture3" type="file"/>
                    <Form.Control name="picture4" type="file"/>
                </Form.Group>
                <Button type="submit">Next</Button>
            </Form>

            {success?<Alert variant="success" onClose={()=>setSuccess(false)} className={styles.alertSuccess} dismissible>
                    Updated.
                </Alert>:<p></p>}
        </div>
    )
}

export default AddProducts
