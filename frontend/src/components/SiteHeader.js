import "../styles/font.css";
import React from 'react';
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faHeart, faMagnifyingGlass, faPhoneVolume, faUser} from '@fortawesome/free-solid-svg-icons';

const SiteHeader = (props) => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.header1}>
                <img className={Styles.logo} alt='logo' src={require('../assets/img/logo-sm.png')}/>
                <div className={Styles.searchBox}>
                    <input className={Styles.input} type={"text"} placeholder={'دنبال چه محصولی هستید؟'}/>
                    <button className={Styles.searchIcon+" "+Styles.button}>
                        <FontAwesomeIcon className={Styles.icon} icon={faMagnifyingGlass} />
                    </button>
                </div>
                <a className={Styles.call}>
                    <FontAwesomeIcon className={Styles.icon+" "+Styles.callIcon} icon={faPhoneVolume} />
                    <span style={{fontSize:"14px"}}>شماره تماس</span>
                    <span style={{fontSize:"14px"}}>0922334455</span>
                </a>
                <a className={Styles.store}>
                    <FontAwesomeIcon className={Styles.icon} icon={faBasketShopping} />
                </a>
                <a className={Styles.love}>
                    <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                </a>
                <a className={Styles.profile}>
                    <FontAwesomeIcon className={Styles.icon} icon={faUser} />
                </a>

            </div>
            <div className={Styles.navMenu}>

            </div>
        </div>
    );
};

export default SiteHeader;