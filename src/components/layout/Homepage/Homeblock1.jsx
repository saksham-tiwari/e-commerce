import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import maingirl from "../../../assets/homeimages/maingirl.svg"

const Homeblock1 = () => {
    const history = useHistory();
    const handleClick = ()=>{
        history.push("/products-page")
    }
    return (
        <div>
            <div className="img-main">
                <h1 className="main-slogan">ONE STOP FOR YOUR ALL SHOPPING NEEDS. INDIA SHOPS HERE, WE SHOP at V-SHOP.</h1>
                <Button onClick={handleClick} variant="primary" className="viewProdBtn">View Products</Button>
                <img src={maingirl} alt="" className="maingirl"/>
            </div>
        </div>
    )
}

export default Homeblock1
