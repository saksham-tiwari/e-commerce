import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '@trendyol-js/react-carousel';
import Sample from "../../assets/download.jfif"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Homeblock2 = () => {
    return (
        <div>
            <Carousel show={4.5} slide={2} transition={0.5} swiping={true} useArrowKeys={true} leftArrow={<ArrowLeftIcon/>} rightArrow={<ArrowRightIcon/>}>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <div className="carousel-image"></div>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
            </Carousel>
        </div>
    )
}

export default Homeblock2
