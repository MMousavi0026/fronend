import "../styles/font.css";
import React from 'react';
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faHeart, faMagnifyingGlass, faPhoneVolume, faUser} from '@fortawesome/free-solid-svg-icons';

const SiteHeader = (props) => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.headerItemsWrapper}>
                <div className={Styles.headerItems}>
                    <img className={Styles.logo} alt='logo' src={require('../assets/img/logo-sm.png')}/>
                    <div className={Styles.searchBox}>
                        <input className={Styles.input} type={"text"} placeholder={'دنبال چه محصولی هستید؟'}/>
                        <button className={Styles.searchIcon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={Styles.buttonsWrapper}>
                        <button>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={Styles.navMenu}>

            </div>
        </div>
    );
};

export default SiteHeader;