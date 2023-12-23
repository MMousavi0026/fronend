import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import DraftsIcon from '@mui/icons-material/Drafts';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {NavLink, Outlet} from "react-router-dom";
import styles from './AppBar.module.css';

const AppBar = () => {
    return (
        <div style={{zIndex:'1'}}>
            <nav className={styles.wrapper}>
                <NavLink to="/" className={styles.item}>
                    <HomeIcon className={styles.icon} />
                    <span className={styles.text}>خانه</span>
                </NavLink>
                <NavLink to="/products" className={styles.item}>
                    <ShoppingBasketIcon className={styles.icon}/>
                    <span className={styles.text}>محصولات</span>
                </NavLink>
                <NavLink to="#" className={styles.item}>
                    <HelpIcon className={styles.icon}/>
                    <span className={styles.text}>سوالات</span>
                </NavLink>
                <NavLink to="#" className={styles.item}>
                    <DraftsIcon className={styles.icon} />
                    <span className={styles.text}>تماس با ما</span>
                </NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default AppBar;