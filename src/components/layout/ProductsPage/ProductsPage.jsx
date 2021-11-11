import React, { useState } from 'react'
import Oval1 from './Oval1'
import Oval2 from './Oval2'
import Oval3 from './Oval3'
import { Button } from 'react-bootstrap'
import CardCarousel from '../CardCarousel';

const ProductsPage = () => {
    const products=[
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "xyz",
            category: "Clothes",
            desc: "Sweater"
        },
        {
            name: "abc",
            category: "Clothes",
            desc: "Sweater"   
        },
        {
            name: "def",
            category: "Clothes",
            desc: "Sweater"
        }
    ]
    let allProds;
    const [page, setPage] = useState(1);
    // const [disp, setDisp] = useState(false);
    let count =-1;
    if(products.length>24){
        allProds = products.slice((24*(page-1)),(24*page));
        // setDisp(true);

    } else{
        allProds = products;
    }
    return (
        <div>
            <h1 className="whole">Search results for: Clothings</h1>
            {allProds.map((product)=>{
                count++;
                if(count===3){
                    count = 0;
                }
                if(count === 0){
                    return(<Oval1 name={product.name} category={product.category} desc={product.desc}/>)
                } else if(count === 1){
                    return(<Oval2 name={product.name} category={product.category} desc={product.desc}/>)
                } else{
                    return(<Oval3 name={product.name} category={product.category} desc={product.desc}/>)
                }
            })}
           
           <div className="prev-nex">
                
            {(page!==1)?<Button onClick={()=>{setPage(page-1)}}>prev</Button>:<Button disabled>prev</Button>}

            {allProds.length===24?<Button onClick={()=>{setPage(page+1)}}>next</Button>:<><p>No more matching products</p></>}

           </div>

            {allProds.length!==24?<CardCarousel/>:""}

        </div>
    )
}

export default ProductsPage
