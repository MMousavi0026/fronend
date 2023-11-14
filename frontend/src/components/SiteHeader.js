import "../styles/font.css";
import React from 'react';
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faHeart, faMagnifyingGlass, faPhoneVolume, faUser} from '@fortawesome/free-solid-svg-icons';

const SiteHeader = () => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.header1}>
                <div className={Styles.header11}>
                    <img className={Styles.logo} alt='logo' src={require('../assets/img/logo-sm.png')}/>
                    <div className={Styles.searchBox}>
                        <input className={Styles.input} type={"text"} placeholder={'دنبال چه محصولی هستید؟'}/>
                        <button className={Styles.searchIcon+" "+Styles.button}>
                            <FontAwesomeIcon className={Styles.icon} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={Styles.icons} style={{width:"59vm", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <a className={Styles.call}>
                            <FontAwesomeIcon className={Styles.icon+" "+Styles.callIcon} icon={faPhoneVolume} />
                            <div style={{marginRight:"2vh", display:"flex", flexDirection:"column"}}>
                                <span style={{fontSize:".9vw", color:"#e6e6e6"}}>شماره تماس</span>
                                <span style={{fontSize:"1.4vw"}}>0922334455</span>
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

            </div>
        </div>
    );
};

export default SiteHeader;