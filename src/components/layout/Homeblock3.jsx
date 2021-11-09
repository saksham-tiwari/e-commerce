import React from 'react'
import gucci from '../../assets/brands/gucci 1.png';
import hp from '../../assets/brands/hp 1.png';
import havells from '../../assets/brands/havells 1.png';
import nike from '../../assets/brands/nike 1.png';
import oneplus from '../../assets/brands/one plus 1.png';
import puma from '../../assets/brands/Puma 1.png';

const Homeblock3 = () => {
    return (
        <div style={{margin:"75px"}}>


            <div className="brands">
                <img src={gucci} alt="gucci"/>
                <img src={hp} alt="hp"/>
                <img src={havells} alt="havells"/>
                <img src={nike} alt="nike"/>
                <img src={oneplus} alt="oneplus"/>
                <img src={puma} alt="puma"/>

            </div>
        </div>
    )
}

export default Homeblock3
