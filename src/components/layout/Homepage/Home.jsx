import React, {useEffect} from 'react'
import "./home.css"
import Homeblock1 from './Homeblock1'
import Homeblock2 from './Homeblock2'
import Homeblock3 from './Homeblock3'
import Homeblock4 from './Homeblock4'
import Homeblock5 from './Homeblock5'
import design1 from "../../../assets/2.png";
import design2 from "../../../assets/3.png";
import design3 from "../../../assets/1.png";
import { useSetAuth } from '../../../contexts/AuthContext';
import { useSearch } from '../../../contexts/SearchContext'
import { useHistory } from 'react-router'


const Home = () => {
    // console.log(localStorage.getItem("keys").access);
    const setAuth = useSetAuth();
    const search = useSearch();
    const history = useHistory();
    useEffect(()=>{
        setAuth(false)
        if(search.cond===true){
            history.push(`/products/query=${search.query}`);
        }
    })
    return (
        <div style={{marginTop:"-25px"}}>
            <Homeblock1/>
            <Homeblock2/>
            <Homeblock3/>
            {/* <img src={design1} alt="design" className="design1"/> */}
            {/* <img src={design2} alt="design" className="design2"/> */}
            <Homeblock4/>
            {/* <img src={design3} alt="design" className="design3"/> */}
            <Homeblock5/>
            {/* <Homeblock5/>
            <Homeblock5/> */}

        </div>
    )
}

export default Home
