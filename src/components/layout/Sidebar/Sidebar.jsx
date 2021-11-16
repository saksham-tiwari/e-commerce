import React from 'react'
import styles2 from "./Sidebar.module.css"
import userImg from "../../../assets/userImg.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { style } from '@mui/system';


const Sidebar = () => {
    return (
        <div className={styles2.sidebar}>
        <div className={styles2.userCapsule}>
            <img src={userImg} alt="user" className={styles2.userImg}/>
            <h5 className={styles2.username}>XZ</h5>
        </div>
        <button className={styles2.logoutBtn}>  LogOut</button>
        {/* <ul className={styles.list}>
            <Link className={styles.listLinks}><li><ShoppingCartIcon className={styles.listIcons}/>My Orders</li></Link>
            <Link className={styles.listLinks}><li><ShoppingBagIcon className={styles.listIcons}/>My Wishlist</li></Link>
            <Link className={styles.listLinks}><li><LocalShippingIcon className={styles.listIcons}/>My Cart</li></Link>
            <Link className={styles.listLinks}><li><CreditCardIcon className={styles.listIcons}/>My Transactions</li></Link>
            <Link className={styles.listLinks}><li><ChatBubbleOutlineOutlinedIcon className={styles.listIcons}/>My Stuff</li></Link>
            <Link className={styles.listLinks}><li><SettingsIcon className={styles.listIcons}/>Settings</li></Link>
        </ul> */}
        <h5 className={styles2.customerSupport}>Customer Support</h5>
        <p className={styles2.customerSupportPara}>Ask you query , place requests or important issues. Our support team will contact 24/7 to you. </p>
    </div>
    )
}

export default Sidebar
