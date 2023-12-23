import React from 'react';
import DraftsIcon from "@mui/icons-material/Drafts";
import SocialMediaIcon from "./socialMediaIcon";
import Styles from './footer.module.css'
import Box1Item2 from "./box1Item2";

const Footer = () => {
    return (
        <div style={{width:'100%'}}>
            <div className={Styles.footerWrapper}>
                <div className={Styles.floatBox}>
                    <div className={Styles.floatBoxItem}>
                        <span style={{fontSize:'40px', color:'white'}}>در</span>
                        <span style={{fontSize:'40px', color:'#01e281'}}> خبرنامه ویژه </span>
                        <span style={{fontSize:'40px', color:'white'}}>ما عضو شوید</span>
                    </div>
                    <div className={Styles.inputWrapper}>
                        <input style={{borderRadius:'50px', paddingRight:'20px', width:'40vw', height:'60px', border:'none'}} type={"text"} placeholder={"ایمیل خود را وارد کنید"}/>
                        <a className={Styles.button1}>
                            <DraftsIcon fontSize={'20px'} className={Styles.button1Text} style={{marginLeft:'8px'}}/>
                            <span className={Styles.button1Text}>عضویت</span>
                        </a>
                    </div>
                </div>
                <div className={Styles.box1}>
                    <div style={{height:'150px'}}></div>
                    <div className={Styles.box1Row1}>
                        <div className={Styles.box1Item}>
                            <div className={Styles.box1ItemA} style={{width:'75%', height:'88%', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-around'}}>
                                <img style={{width:'200px'}} src="/img/logo-sm.png" alt="logo"/>
                                <span style={{fontSize:'17px', textAlign:'right', width:'100%', color:'white', lineHeight:'35px'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.</span>
                                <div className={Styles.socialMediaIcons} style={{display:"flex", flexDirection:"row", alignItems:'center', justifyContent:"flex-start", width: "70%" }}>
                                    <SocialMediaIcon imgSrc="/img/eitaa-icon-white2.png"/>
                                    <SocialMediaIcon imgSrc="/img/instagram.png"/>
                                    <SocialMediaIcon imgSrc="/img/bale-icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.box1Item}>
                            <div className={Styles.box1ItemA} style={{width:'75%', height:'88%', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                <span style={{fontSize:'22px', color:'white'}}>لینک های مفید</span>
                                <div className={Styles.box1Item2A} style={{display:'flex', flexDirection:'column', borderTop:'rgba(86, 112, 133, 0.5) solid 1px', width:'100%', paddingTop:'7px'}}>
                                    <Box1Item2 title="مرکز پشتیبانی"/>
                                    <Box1Item2 title="مرکز پشتیبانی"/>
                                    <Box1Item2 title="مرکز پشتیبانی"/>
                                    <Box1Item2 title="مرکز پشتیبانی"/>
                                    <Box1Item2 title="مرکز پشتیبانی"/>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.box1Item}>
                            <div className={Styles.box1ItemA} style={{width:'80%', height:'88%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <span style={{fontSize:'22px', textAlign:'center', color:'white'}}>آیا علاقمند به داشتن </span>
                                    <span style={{fontSize:'22px', textAlign:'center', color:'#01e281'}}>سوپر مارکت هستید؟</span>
                                </div>
                                <span style={{fontSize:'17px', textAlign:'center', width:'100%', color:'rgb(159,159,159)', lineHeight:'35px'}}>اندازه سوپرمارکت‌ها معمولاً از خواربارفروشیهای سنتی بزرگترند و محصولات بیشتری می‌فروشند.</span>
                                <a className={Styles.button2}>
                                    <span className={Styles.button2Text} style={{fontSize:"16px"}}>فروشنده شوید</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{height:'35px'}}></div>
                    <div className={Styles.box1Row2}>
                        <span className={Styles.box1Row2Item} style={{fontSize:'14px', color:'rgb(159,159,159)', margin:'20px 30px'}}>© کپی رایت ۲۰۲۳ طراحی توسط ماهان موسوی</span>
                        <img className={Styles.box1Row2Item} style={{width:'270px', margin:'20px 30px'}} src="/img/f1.png" alt=""/>
                    </div>
                    <div className={Styles.space} style={{height:'80px'}}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;