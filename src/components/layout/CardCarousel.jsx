import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '@trendyol-js/react-carousel';
import Sample from "../../assets/download.jfif"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Homeblock2 = () => {
    return (
        <div>
            <Carousel show={6.5} slide={2} transition={0.5} swiping={true} useArrowKeys={true} leftArrow={<ArrowLeftIcon/>} rightArrow={<ArrowRightIcon/>}>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                <div>
                    <img src={Sample} alt="sample"/>
                    <h1>Heading</h1>
                    <p>Hello</p>

                </div>
                
            </Carousel>
        </div>
    )
}

export default Homeblock2
