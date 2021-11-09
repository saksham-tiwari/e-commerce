import React from 'react'
import image from '../../../assets/download.jfif'

const Homeblock2 = () => {
    return (
        <div className="box-2">
            <h1 className="headings-all">Explore Trending</h1>
            <div className="flex-container">
                <div>
                    <div className="flex-container flex-inside-flex">
                        <img className="explore-img" src={image} alt="sample"/>
                        <div className="desc">
                            <h3 className="headings-all">XYZ</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dolor in orci euismod rhoncus sed at orci. In hac habitasse platea dictumst.Cras pulvinar luctus felis.</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex-container flex-inside-flex">
                            <img className="explore-img" src={image} alt="sample"/>
                            <div className="desc">
                                <h3 className="headings-all">XYZ</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dolor in orci euismod rhoncus sed at orci. In hac habitasse platea dictumst.Cras pulvinar luctus felis.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeblock2
