import React from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import AppBar from "../components/AppBar/AppBar";
import Styles from './home.module.css';
import { ReactComponent as SvgComponent } from '../assets/img/homeBox1.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faCaretDown, faFolder, faGift, faLink, faTag} from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
    return (
        <>
            <SiteHeader/>
            <AppBar/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div className={Styles.container}>
                    <div className={Styles.box1}>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'49%', height:'100%', textAlign:'right', marginRight:'35px'}}>
                            <h1 style={{fontSize:'40px', textAlign:'right', width:'100%', color:'#01e281',margin:'0'}}>سوپر مارکت اکسترا</h1>
                            <span style={{fontSize:'60px', textAlign:'right', width:'100%', padding:'30px 0'}}>تازه تر از همه جا</span>
                            <span style={{fontSize:'15px', textAlign:'right', width:'100%', color:'#535353'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.</span>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:'30px', width:'100%'}}>
                                <a className={Styles.button1}>
                                    <span className={Styles.buttonText} style={{fontSize:"18px", color:'white'}}>۲۵٪ تخفیف ویژه</span>
                                </a>
                                <a className={Styles.button2} style={{backgroundColor:'none!important'}}>
                                    <span className={Styles.buttonText} style={{fontSize:"18px", color:'#122d40'}}>مشاهده محصولات</span>
                                </a>
                            </div>
                        </div>
                        <div style={{paddingTop:'85px', width:'49%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <img src={require('../assets/img/homeBox1.png')} alt="shopping" style={{maxWidth:'590px', width:'100%', height:'auto'}}/>
                        </div>
                    </div>
                </div>
                <div className={Styles.floatBox}>
                    <div>
                        <img src={require('../assets/img/Transportation.png')} alt="shopping" style={{width:'100%', height:'auto'}}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;