import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
// import styles from "./MyProfile.module.css"

const MyProfile = () => {
    return (
        <div>
            <h1 className="whole">My Profile</h1>
            <hr className="hr-wish" />
            <Sidebar/>
            <PersonalInfo/>
            
        </div>
    )
}

export default MyProfile
