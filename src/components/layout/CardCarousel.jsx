import React, { useEffect, useState } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useHistory } from 'react-router';
import productsService from '../../api/services/products.service';

const Homeblock2 = () => {
    const [products, setProducts] = useState([
        {
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
        }
        ])

    const [state, setstate] = useState(false)
    const history = useHistory();

    useEffect(()=>{
        productsService.GetProducts()
        .then((res)=>{
            // console.log(res.data)
            res.data.reverse();
            setProducts(res.data.splice(0,8))
            console.log(res.data.splice(0,8))
            setstate(true);
        })
    },[])

    const handleClick = (id)=>{
        history.push(`/product/${id}`)
    }
    return (
        <div>
            {state?<Carousel show={4.5} slide={2} transition={0.5} swiping={true} useArrowKeys={true} leftArrow={<ArrowLeftIcon/>} rightArrow={<ArrowRightIcon/>} className="caraouselMain">
                {/* {products.forEach((product)=>{
                    <div>
                    <div className="carousel-image"></div>
                    <h1>{product.name}</h1>
                    <p>Hello</p>

                </div>
                })} */}
                <div onClick={()=>{handleClick(products[0].id)}}>
                    <div><img src={products[0].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[0].name}</h1>
                    <p>&#8377;{products[0].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[1].id)}}>
                    <div><img src={products[1].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[1].name}</h1>
                    <p>&#8377;{products[1].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[2].id)}}>
                    <div><img src={products[2].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[2].name}</h1>
                    <p>&#8377;{products[2].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[3].id)}}>
                    <div><img src={products[3].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[3].name}</h1>
                    <p>&#8377;{products[3].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[4].id)}}>
                    <div><img src={products[4].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[4].name}</h1>
                    <p>&#8377;{products[4].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[5].id)}}>
                    <div><img src={products[5].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[5].name}</h1>
                    <p>&#8377;{products[5].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[6].id)}}>
                    <div><img src={products[6].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[6].name}</h1>
                    <p>&#8377;{products[6].price}</p>

                </div>
                <div onClick={()=>{handleClick(products[7].id)}}>
                    <div><img src={products[7].picture1} alt="prodImg" className="carousel-image"></img></div>
                    <h1 className="carouselh1">{products[7].name}</h1>
                    <p>&#8377;{products[7].price}</p>

                </div>
            </Carousel>:<></>}
        </div>
    )
}

export default Homeblock2
