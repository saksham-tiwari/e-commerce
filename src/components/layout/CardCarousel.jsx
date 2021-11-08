import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '@trendyol-js/react-carousel';

const Homeblock2 = () => {
    return (
        <div>
            <Carousel show={3.5} slide={2} transition={0.5}>
                <div color="#f27a1a">We love Trendyol orange</div>
                <div color="#d53f8c">This is our github</div>
                <div color="#16be48">We love Trendyol green</div>
                <div color="#3f51b5">This is our website</div>
            </Carousel>
        </div>
    )
}

export default Homeblock2
