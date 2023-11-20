import React from 'react';
import "../../styles/font.css";
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBasketShopping, faCaretDown,
    faGift,
    faHeart,
    faMagnifyingGlass,
    faPhoneVolume,
    faUser
} from '@fortawesome/free-solid-svg-icons';

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
            <div className={Styles.navMenuWrapper}>
                <div className={Styles.navMenu}>
                    <div>
                        <ul className={Styles.navbar}>
                            <li>
                                <a className={Styles.menuItems}>
                                    <FontAwesomeIcon className={Styles.menuItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>محصولات جدید</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.menuItems}>
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>پرفروش ترین ها</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.menuItems}>
                                    <FontAwesomeIcon className={Styles.menuItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>تخفیفات ویژه</span>
                                    <FontAwesomeIcon className={Styles.menuItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                </a>
                                <div className={Styles.offItems}>
                                    <div className={Styles.offItem}>
                                        <img className={Styles.fish} alt='logo' src={require('../../assets/img/fish.png')}/>
                                        <span style={{padding:'40px'}}>ماهی<br/> و آبزیان</span>
                                        <span>۲۰٪ تخفیف</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className={Styles.menuItems}>
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>دسترسی سریع</span>
                                    <FontAwesomeIcon className={Styles.menuItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                </a>
                            </li>
                            <li>
                                <a className={Styles.menuItems}>
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>اخبار</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.menuItems}>
                                    <span className={Styles.menuItem} style={{fontSize:"21px", color:"white"}}>تماس با ما</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a className={Styles.dayOff}>
                            <FontAwesomeIcon className={Styles.off} style={{fontSize:"15px", marginLeft:"10px", color:'#122d40'}} icon={faGift} />
                            <span className={Styles.off} style={{fontSize:"15px", color:'#122d40'}}>تخفیفات روزانه</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteHeader;