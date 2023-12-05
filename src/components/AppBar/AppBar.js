import React from 'react';
import Styles from './AppBar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faCircleQuestion, faEnvelopeOpenText, faHouse} from "@fortawesome/free-solid-svg-icons";
import {NavLink, Outlet} from "react-router-dom";

const AppBar = () => {
    return (
        <div style={{zIndex:'1'}}>
            <nav className={Styles.wrapper}>
                <NavLink to="/" className={Styles.item}>
                    <FontAwesomeIcon className={Styles.icon} icon={faHouse} />
                    <span className={Styles.text}>خانه</span>
                </NavLink>
                <NavLink to="#" className={Styles.item}>
                    <FontAwesomeIcon className={Styles.icon} className={Styles.icon} icon={faBasketShopping} />
                    <span className={Styles.text}>محصولات</span>
                </NavLink>
                <NavLink to="#" className={Styles.item}>
                    <FontAwesomeIcon className={Styles.icon} icon={faCircleQuestion} />
                    <span className={Styles.text}>سوالات</span>
                </NavLink>
                <NavLink to="#" className={Styles.item}>
                    <FontAwesomeIcon className={Styles.icon} icon={faEnvelopeOpenText} />
                    <span className={Styles.text}>تماس با ما</span>
                </NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};

export default AppBar;