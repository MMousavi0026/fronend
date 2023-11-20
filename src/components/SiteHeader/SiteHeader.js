import "../../styles/font.css";
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
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const SiteHeader = () => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.header1}>
                <div className={Styles.header11}>
                    <img className={Styles.logo} alt='logo' src={require('../../assets/img/logo-sm.png')}/>
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
                    <a className={Styles.menuItems}>
                        <FontAwesomeIcon style={{color:"white", fontSize:"21px", marginLeft:"10px"}} icon={faBasketShopping} />
                        <span style={{fontSize:"21px", color:"white"}}>محصولات جدید</span>
                    </a>
                    <a className={Styles.menuItems}>
                       <span style={{fontSize:"21px", color:"white"}}>پرفروش ترین ها</span>
                    </a>
                    <a className={Styles.menuItems}>
                        <FontAwesomeIcon style={{color:"white", fontSize:"21px", marginLeft:"10px"}} icon={faBasketShopping} />
                        <span style={{fontSize:"21px", color:"white"}}>تخفیفات ویژه</span>
                    </a>
                    <a className={Styles.menuItems}>
                        <span style={{fontSize:"21px", color:"white"}}>دسترسی سریع</span>
                    </a>
                    <a className={Styles.menuItems}>
                        <span style={{fontSize:"21px", color:"white"}}>اخبار</span>
                    </a>
                    <a className={Styles.menuItems}>
                        <span style={{fontSize:"21px", color:"white"}}>تماس با ما</span>
                    </a>
                </div>
                <div>
                    <a className={Styles.dayOff}>
                        <FontAwesomeIcon style={{fontSize:"18px", marginLeft:"10px"}} icon={faGift} />
                        <span style={{fontSize:"18px"}}>تخفیفات روزانه</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SiteHeader;