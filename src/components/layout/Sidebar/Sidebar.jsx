import React from 'react'
import styles from "./Sidebar.module.css"
import { Button } from 'react-bootstrap'
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useUpdateUser } from '../../../contexts/UserContext';


const Sidebar = () => {
    const updateUser = useUpdateUser();
    const logoutHandle = ()=>{
        localStorage.removeItem("keys"); 
        updateUser(false);
        window.location.reload();
    }
    return (
        <div className={styles.sidebar}>
        <div className={styles.dashCapsule}>
            <DashboardIcon className={styles.dashIcon}/>
            <h5 className={styles.username}>Dashboard</h5>
        </div>
        <Button className={styles.logoutBtn} onClick={logoutHandle}> <LogoutIcon/> LogOut</Button>
        <ul className={styles.list}>
            <Link to="/dashboard/add-products" className={styles.listLinks}><li><ShoppingCartIcon className={styles.listIcons}/>Add Product</li></Link>
            <Link to="/dashboard/my-products" className={styles.listLinks}><li><ShoppingBagIcon className={styles.listIcons}/>My Products</li></Link>
            {/* <Link className={styles.listLinks}><li><LocalShippingIcon className={styles.listIcons}/>My Cart</li></Link>
            <Link className={styles.listLinks}><li><CreditCardIcon className={styles.listIcons}/>My Transactions</li></Link>
            <Link className={styles.listLinks}><li><ChatBubbleOutlineOutlinedIcon className={styles.listIcons}/>My Stuff</li></Link>
            <Link className={styles.listLinks}><li><SettingsIcon className={styles.listIcons}/>Settings</li></Link> */}
        </ul>
        <h5 className={styles.customerSupport}>Customer Support</h5>
        <p className={styles.customerSupportPara}>Ask you query , place requests or important issues. Our support team will contact 24/7 to you. </p>
    </div>
    )
}

export default Sidebar
