import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Block from "../Block/OrderBlock";
import MyComponent from 'react-fullpage-custom-loader'
import { useHistory } from 'react-router';


const Orders = () => {
    let access_token;
    const [fullPageLoader, setFullPageLoader] = useState(false);

    const history = useHistory();
    const [data, setData] = useState([{
        price: 0,
        product: {
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
        },
        quantity: 0
    }])

    useEffect(()=>{
        setFullPageLoader(true);
        if(localStorage.getItem("keys")===null){
            history.push("/");
        }
        access_token= JSON.parse(localStorage.getItem('keys')).access
        axios({
            method: "get",
            url:"https://vshopappdjango.herokuapp.com/api/products/order/",
            headers:{
                Authorization: "Bearer " + access_token
            },
        })
        .then((res)=>{
            console.log(res)
            setData(res.data);
            setFullPageLoader(false)
        })

    },[])
    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">My Orders</h1>
            <hr className="hr-wish"/>
            {data.map((products)=>{
                return(<Block id={products.product.id} name={products.product.name} price={products.price} desc={products.product.description} img={products.product.picture1}/>)
            })}
            {data.length===0?<h1>No Orders!<br/>Get To Shopping!</h1>:<p></p>}
        </div>
    )
}

export default Orders
