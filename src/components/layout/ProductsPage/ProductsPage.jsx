import React, { useEffect, useState } from 'react'
import Oval1 from './Oval1'
import Oval2 from './Oval2'
import Oval3 from './Oval3'
import { Button } from 'react-bootstrap'
import CardCarousel from '../CardCarousel';
import MyComponent from 'react-fullpage-custom-loader'
import { useSetAuth } from '../../../contexts/AuthContext'
import ProductsService from '../../../api/services/products.service'

const ProductsPage = () => {

    const [fullPageLoader, setFullPageLoader] = useState(false);
    const setAuth = useSetAuth();

    useEffect(()=>{
        setFullPageLoader(true)
        setAuth(false);
        ProductsService.GetProducts()
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data.reverse());
            setFullPageLoader(false);
        })
    },[])

    const [products, setProducts] = useState([])

    let allProds;
    const [page, setPage] = useState(1);
    // const [disp, setDisp] = useState(false);
    let count =-1;
    // var len;
    if(products.length>24){
        // len = products.len;
        // products.reverse();
        // console.log(products.reverse())
        allProds = products.slice((24*(page-1)),(24*page));
        // setDisp(true);

    } else{
        allProds = products;
    }

    return (
        <div>
            {fullPageLoader?<MyComponent loaderType="ball-circus" fadeIn={true} sentences={[]}/>:<></>}

            <h1 className="whole">All Products</h1>
            <hr className="hr-wish"/>

            {allProds.map((product)=>{
                count++;
                if(count===3){
                    count = 0;
                }
                if(count === 0){
                    return(<Oval1 id={product.id} name={product.name} brand={product.brand} description={product.description} img={String(product.picture1)} price = {product.price}/>)
                } else if(count === 1){
                    return(<Oval2 id={product.id} name={product.name} brand={product.brand} description={product.description} img={String(product.picture1)} price = {product.price}/>)
                } else{
                    return(<Oval3 id={product.id} name={product.name} brand={product.brand} description={product.description} img={String(product.picture1)} price = {product.price}/>)
                }
            })}
           
           <div className="prev-nex">
                
            {(page!==1)?<Button onClick={()=>{setPage(page-1)}}>prev</Button>:<Button disabled>prev</Button>}

            {allProds.length===24?<Button onClick={()=>{setPage(page+1)}}>next</Button>:<><p>No more matching products</p></>}

           </div>

            {allProds.length!==24?<><h3>Similar Products</h3><CardCarousel/></>:""}

        </div>
    )
}

export default ProductsPage
