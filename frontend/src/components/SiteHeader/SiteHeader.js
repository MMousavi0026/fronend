import "../styles/font.css";
import React from 'react';
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBasketShopping,
    faGift,
    faHeart,
    faMagnifyingGlass,
    faPhoneVolume,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import {Dropdown} from "react-bootstrap";

const SiteHeader = () => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.header1}>
                <div className={Styles.header11}>
                    <img className={Styles.logo} alt='logo' src={require('../assets/img/logo-sm.png')}/>
                    <div className={Styles.searchBox}>
                        <input className={Styles.input} type={"text"} placeholder={'دنبال چه محصولی هستید؟'}/>
                        <button className={Styles.searchIcon+" "+Styles.button}>
                            <FontAwesomeIcon className={Styles.icon} style={{border:"none"}} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={Styles.icons} style={{width:"59vm", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <a className={Styles.call}>
                            <FontAwesomeIcon className={Styles.icon+" "+Styles.callIcon} icon={faPhoneVolume} />
                            <div className={Styles.phone} style={{marginRight:"8px", display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:"10px", color:"#e6e6e6"}}>شماره تماس</span>
                                <span style={{fontSize:"17px"}}>0922334455</span>
                            </div>
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
                </div>

            </div>
            <div className={Styles.navMenu}>
                <div className={Styles.navbar}>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-nav">
                            منوی کرکره‌ای
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#home">خانه</Dropdown.Item>
                            <Dropdown.Item href="#about">درباره ما</Dropdown.Item>
                            <Dropdown.Item href="#contact">تماس با ما</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <a className={Styles.dayOff}>
                        <FontAwesomeIcon style={{color:"white", fontSize:"18px", marginLeft:"10px"}} icon={faGift} />
                        <span style={{fontSize:"18px", color:"#white"}}>تخفیفات روزانه</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SiteHeader;