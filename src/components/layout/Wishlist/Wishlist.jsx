import React, { useEffect, useState } from 'react'
import Block from "../Block/WishlistBlock"
import CardCarousel from "../CardCarousel"
import { useUser } from '../../../contexts/UserContext'
import { useHistory } from 'react-router'
import MyComponent from 'react-fullpage-custom-loader'
import { useWishlist, useSetWishlist } from '../../../contexts/WishlistContext'
import { Alert } from 'react-bootstrap'
import { useSetAuth } from '../../../contexts/AuthContext'
import WishlistService from '../../../api/services/wishlist.service'


const Wishlist = () => {
    const [fullPageLoader, setFullPageLoader] = useState(false);

    const wishlist = useWishlist();
    const setWishlist = useSetWishlist();
    const [success, setSuccess] = useState(false);
    const [success2, setSuccess2] = useState(false);


    const history = useHistory();
    const isUser = useUser();
    const setAuth = useSetAuth();
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
        setAuth(false);
        setFullPageLoader(true);
        WishlistService.GetProducts()
        .then((res)=>{
            // setData(res.data)
            setWishlist(res.data)
            console.log(res.data);
            setFullPageLoader(false);
        })
    },[])
    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">My Wishlist</h1>
            <hr className="hr-wish"/>
            {success?<Alert variant="success" onClose={()=>setSuccess(false)} className="alert" style={{marginLeft:"35%"}} dismissible>
                    Added to cart
                </Alert>:<p></p>}
            {success2?<Alert variant="success" onClose={()=>setSuccess2(false)} className="alert" style={{marginLeft:"35%"}} dismissible>
                Product Deleted
            </Alert>:<p></p>}
            {wishlist.map((product)=>{
                return(<Block id={product.id} name={product.name} price={product.price} desc={product.description} img={product.picture1} setSuccess={setSuccess} setSuccess2={setSuccess2}/>)
            })}
            {/* <Block/>            
            <Block/>            
            <Block/>
            <Block/> */}
            <br/>
            <hr className="hr-wish"/>
            <br/>
            <h3>Similars</h3>
            <br/>

            <CardCarousel/>

        </div>
    )
}

export default Wishlist
