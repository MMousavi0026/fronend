import React, {useState} from 'react';
import "../../styles/font.css";
import Styles from './siteHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBasketShopping, faCaretDown, faFolder,
    faGift,
    faHeart, faLink,
    faMagnifyingGlass,
    faPhoneVolume, faTag,
    faUser, faXmark
} from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

const SiteHeader = () => {

    const [isShownMenubar, setShowMenubar] = useState(false);

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
                    <div className={Styles.icons} style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
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
                        <div className={Styles.barsWrapper}>
                            <a className={Styles.bars} onClick={()=> setShowMenubar(true)}>
                                <FontAwesomeIcon className={Styles.icon} icon={faBars} />
                            </a>
                            {isShownMenubar ?
                                <div className={Styles.menubarsWrapper}>
                                    <a className={Styles.xmark} onClick={()=> setShowMenubar(false)}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </a>
                                    <div className={Styles.menubarWrapper}>
                                        <div className={Styles.ulWrapper}>
                                            <ul className={Styles.menubar}>
                                                <li className={Styles.menuLi}>
                                                    <a className={Styles.menuItems}>
                                                        <FontAwesomeIcon className={Styles.menuItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>محصولات جدید</span>
                                                    </a>
                                                </li>
                                                <li className={Styles.menuLi} style={{borderTop: '1px solid black'}}>
                                                    <a className={Styles.menuItems}>
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>پرفروش ترین ها</span>
                                                    </a>
                                                </li>
                                                <li className={Styles.menuLi} style={{borderTop: '1px solid black'}}>
                                                    <a className={Styles.menuItems}>
                                                        <FontAwesomeIcon className={Styles.navItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>تخفیفات ویژه</span>
                                                        <FontAwesomeIcon className={Styles.menuItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                                    </a>
                                                    <div className={Styles.offItemsA}>
                                                        <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                                            <img className={Styles.fish} alt='fish' src={require('../../assets/img/s1.png')}/>
                                                            <span style={{fontSize:'3vw', padding:'17px 0', color:'white'}}>ماهی<br/> و آبزیان</span>
                                                            <span style={{fontSize:'14px', color:'#01e281'}}>۲۰٪ تخفیف</span>
                                                        </div>
                                                        <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                                            <img className={Styles.fish} alt='fish' src={require('../../assets/img/s2.png')}/>
                                                            <span style={{fontSize:'3vw', padding:'17px 0', color:'white'}}>میوه و<br/>سبزیجات</span>
                                                            <span style={{fontSize:'14px', color:'#01e281'}}>۴۰٪ تخفیف</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={Styles.menuLi} style={{borderTop: '1px solid black'}}>
                                                    <a className={Styles.menuItems}>
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>دسترسی سریع</span>
                                                        <FontAwesomeIcon className={Styles.menuItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                                    </a>
                                                </li>
                                                <li className={Styles.menuLi} style={{borderTop: '1px solid black'}}>
                                                    <a className={Styles.menuItems}>
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>اخبار</span>
                                                    </a>
                                                </li>
                                                <li className={Styles.menuLi} style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                                                    <a className={Styles.menuItems}>
                                                        <span className={Styles.menuItem} style={{fontSize:"18px", color:"white"}}>تماس با ما</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"absolute",bottom:"35px", width: "120px" }}>
                                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", width: "120px" }}>
                                                <div className={Styles.socialMediaIconWrapper}>
                                                    <img className={Styles.socialMediaIcon} alt='logo' src={require('../../assets/img/eitaa-icon-white2.png')} />
                                                </div>
                                                <div className={Styles.socialMediaIconWrapper}>
                                                    <img className={Styles.socialMediaIcon} alt='logo' src={require('../../assets/img/instagram.png')} />
                                                </div>
                                            </div>
                                            <div style={{color:"white", fontSize:"18px", marginTop:"20px"}}>
                                                <span>کپی رایت ۲۰۲۳</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.navMenuWrapper}>
                <nav className={Styles.navMenu}>
                    <div className={Styles.navbarWrapper}>
                        <ul className={Styles.navbar}>
                            <li>
                                <a className={Styles.navItems}>
                                    <FontAwesomeIcon className={Styles.navItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>محصولات جدید</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.navItems}>
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>پرفروش ترین ها</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.navItems}>
                                    <FontAwesomeIcon className={Styles.navItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}} icon={faBasketShopping} />
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>تخفیفات ویژه</span>
                                    <FontAwesomeIcon className={Styles.navItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                </a>
                                <div className={Styles.offItems}>
                                    <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                        <img className={Styles.fish} alt='fish' src={require('../../assets/img/s1.png')}/>
                                        <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>ماهی<br/> و آبزیان</span>
                                        <span style={{fontSize:'14px', color:'#01e281'}}>۲۰٪ تخفیف</span>
                                    </div>
                                    <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                        <img className={Styles.fish} alt='fish' src={require('../../assets/img/s2.png')}/>
                                        <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>میوه و<br/>سبزیجات</span>
                                        <span style={{fontSize:'14px', color:'#01e281'}}>۴۰٪ تخفیف</span>
                                    </div>
                                    <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                        <img className={Styles.fish} alt='fish' src={require('../../assets/img/s3.png')}/>
                                        <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>نان و<br/>غلات</span>
                                        <span style={{fontSize:'14px', color:'#01e281'}}>۱۵٪ تخفیف</span>
                                    </div>
                                    <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                        <img className={Styles.fish} alt='fish' src={require('../../assets/img/s4.png')}/>
                                        <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>لبنیات و<br/>پروتئین</span>
                                        <span style={{fontSize:'14px', color:'#01e281'}}>۵۰٪ تخفیف</span>
                                    </div>
                                    <div className={Styles.offItem} style={{textAlign: 'center'}}>
                                        <img className={Styles.fish} alt='fish' src={require('../../assets/img/s5.png')}/>
                                        <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>گوشت<br/>و مرغ</span>
                                        <span style={{fontSize:'14px', color:'#01e281'}}>۴۵٪ تخفیف</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className={Styles.navItems}>
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>دسترسی سریع</span>
                                    <FontAwesomeIcon className={Styles.navItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} icon={faCaretDown} />
                                </a>
                                <div className={Styles.quickAccess} style={{paddingBottom:'10px', paddingTop:'10px'}}>
                                    <div className={Styles.quickAccessColumn} style={{borderLeft:'1px solid gray'}}>
                                        <div>
                                            <span style={{fontSize:'1.5vw', color:'#01e281', paddingBottom:'10px'}}>دسته بندی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faFolder} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سوپر مارکت</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faFolder} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>مرغ و ماهی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سبزیجات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faFolder} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>لبنیات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faFolder} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>نظافت و شستشو</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faFolder} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>پر فروش ترین ها</span>
                                        </div>
                                    </div>
                                    <div className={Styles.quickAccessColumn} style={{borderLeft:'1px solid gray'}}>
                                        <div>
                                            <span style={{fontSize:'1.5vw', color:'#01e281', paddingBottom:'10px'}}>دسته بندی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سوپر مارکت</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>مرغ و ماهی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سبزیجات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>لبنیات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>نظافت و شستشو</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faTag} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>پر فروش ترین ها</span>
                                        </div>
                                    </div>
                                    <div className={Styles.quickAccessColumn}>
                                        <div>
                                            <span style={{fontSize:'1.5vw', color:'#01e281', paddingBottom:'10px'}}>دسته بندی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سوپر مارکت</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>مرغ و ماهی</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>سبزیجات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>لبنیات</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>نظافت و شستشو</span>
                                        </div>
                                        <div className={Styles.quickAccessItem}>
                                            <FontAwesomeIcon style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} icon={faLink} />
                                            <span style={{fontSize:'1.2vw', color:'white'}}>پر فروش ترین ها</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className={Styles.navItems}>
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>اخبار</span>
                                </a>
                            </li>
                            <li>
                                <a className={Styles.navItems}>
                                    <span className={Styles.navItem} style={{fontSize:"1.5vw", color:"white"}}>تماس با ما</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.dayOffWrapper}>
                        <a className={Styles.dayOff}>
                            <FontAwesomeIcon className={Styles.off} style={{fontSize:"1.2vw", marginLeft:"10px", color:'#122d40'}} icon={faGift} />
                            <span className={Styles.off} style={{fontSize:"1.5vw", color:'#122d40'}}>تخفیفات روزانه</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SiteHeader;