import React, { useEffect, useState } from 'react'
import Block from "../Block/WishlistBlock"
import CardCarousel from "../CardCarousel"
import { useUser } from '../../../contexts/UserContext'
import { useHistory } from 'react-router'
import axios from 'axios'
import MyComponent from 'react-fullpage-custom-loader'


const Wishlist = () => {
    var access_token
    const [fullPageLoader, setFullPageLoader] = useState(false);

    const history = useHistory();
    const isUser = useUser();
    const [data,setData] = useState([{
        id: 0,
        name: "Name",
        price: 0,
        brand: "Brand",
        description: "Description",
        picture1: "",
        picture2: "",
        picture3: "",
        picture4: "",
        comment_product: [],
        tag_product: []
    }]);
    useEffect(()=>{
        if(isUser!==true){
            history.push("/");
        }
        setFullPageLoader(true);
        access_token= JSON.parse(localStorage.getItem('keys')).access
        axios({
            method: "get",
            url: "https://vshopappdjango.herokuapp.com/api/products/wishlist/",
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
            setFullPageLoader(false);
        })
    },[])
    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">My Wishlist</h1>
            <hr className="hr-wish"/>
            {data.map((product)=>{
                return(<Block id={product.id} name={product.name} price={product.price} desc={product.description} img={product.picture1}/>)
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
