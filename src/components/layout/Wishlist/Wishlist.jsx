import React, { useEffect } from 'react'
import Block from "../Block/WishlistBlock"
import CardCarousel from "../CardCarousel"
import { useUser } from '../../../contexts/UserContext'
import { useHistory } from 'react-router'

const Wishlist = () => {
    const history = useHistory();
    const isUser = useUser();
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
    },[])
    return (
        <div>
            <h1 className="whole">My Wishlist</h1>
            <hr className="hr-wish"/>
            <Block/>            
            <Block/>            
            <Block/>
            <Block/>
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
