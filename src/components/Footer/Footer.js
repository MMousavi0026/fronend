import React from 'react';
import Styles from './footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faInstagram, faTwitter, faFacebook} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div style={{width:'100%'}}>
            <div className={Styles.footerWrapper}>
                <div className={Styles.floatBox}>
                    <div>
                        <span style={{fontSize:'40px', color:'white'}}>در</span>
                        <span style={{fontSize:'40px', color:'#01e281'}}> خبرنامه ویژه </span>
                        <span style={{fontSize:'40px', color:'white'}}>ما عضو شوید</span>
                    </div>
                    <div className={Styles.inputWrapper}>
                        <input style={{borderRadius:'50px', paddingRight:'20px', width:'450px', height:'60px', border:'none'}} type={"text"} placeholder={"ایمیل خود را وارد کنید"}/>
                        <a className={Styles.button1}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon className={Styles.button1Text} style={{marginLeft:'8px'}} icon={faEnvelopeOpen} />
                            <span className={Styles.button1Text}>عضویت</span>
                        </a>
                    </div>
                </div>
                <div className={Styles.box1}>
                    <div className={Styles.box1Row1}>
                        <div className={Styles.box1Item}>
                            <div style={{width:'70%', height:'70%', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-around'}}>
                                <img style={{width:'200px'}} src={require("../../assets/img/logo-sm.png")} alt="logo"/>
                                <span style={{fontSize:'18px', textAlign:'right', width:'100%', color:'white'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد.</span>
                                <div>
                                    <FontAwesomeIcon className={Styles.box1ItemIcon} icon={faTwitter} />
                                    <FontAwesomeIcon className={Styles.box1ItemIcon} icon={faInstagram} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.box1Row2}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;