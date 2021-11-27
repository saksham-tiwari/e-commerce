import React from 'react'
import elec from "../../../assets/homeimages/elec.svg"
import grocery from "../../../assets/homeimages/grocery.svg"
const Homeblock2 = () => {
    return (
        <div className="box-2">
            <h1 className="headings-all">Explore Trending</h1>
            <div className="flexDiv">
            <div className="blockinlinetwo">
                <img src={elec} alt="" className="imagesattop"/>
                <h3>ELECTRONICS</h3>
                <p className="parablock"><br/> <br/> Buy 2 save more. <br/> Get Extra 25% off</p>
            </div>
            <div className="blockinlinetwo">
                <img src={grocery} alt="" className="imagesattop" style={{position:"relative",left:"-15%"}}/>
                <h3>GROCERY</h3>
                <p className="parablock"><br/> <br/> Buy 2 save more. <br/> Get Extra 25% off</p>
            </div>
            </div>
        </div>
    )
}

export default Homeblock2

{/* <div className="flex-container">
                <div>
                    <div className="flex-container flex-inside-flex">
                        <img className="explore-img" src={elec} alt="sample"/>
                        <div className="desc">
                            <h3 className="headings-all">ELECTRONICS</h3>

                            <p><br/> <br/> Buy 2 save more. <br/> Get Extra 25% off <br/></p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex-container flex-inside-flex">
                            <img className="explore-img" src={grocery} alt="sample"/>
                            <div className="desc">
                                <h3 className="headings-all">GROCERY</h3>
                                <p><br/> <br/> Buy 2 save more. <br/> Get Extra 25% off <br/></p>
                            </div>
                    </div>
                </div>
            </div> */}
