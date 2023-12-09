import React from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import AppBar from "../../components/AppBar/AppBar";
import Styles from './home.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBasketShopping,
    faCaretDown, faCartShopping, faCodeCompare,
    faFolder,
    faGift,
    faHeart,
    faLink, faMagnifyingGlass,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <SiteHeader/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div className={Styles.container}>
                    <div className={Styles.box1}>
                        <div className={Styles.box1B} style={{width:'91vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around'}}>
                            <div className={Styles.box1Item1} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', width:'49%', height:'100%'}}>
                                <h1 style={{fontSize:'40px', textAlign:'center', color:'#01e281',margin:'0'}}>سوپر مارکت اکسترا</h1>
                                <span style={{fontSize:'60px', textAlign:'center', padding:'30px 0'}}>تازه تر از همه جا</span>
                                <span style={{fontSize:'18px', textAlign:'right', color:'#535353'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.</span>
                                <div className={Styles.box1Item1Buttons} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:'30px', width:'100%'}}>
                                    <a className={Styles.button1}>
                                        <span className={Styles.button1Text} style={{fontSize:"18px", color:'white'}}>۲۵٪ تخفیف ویژه</span>
                                    </a>
                                    <a className={Styles.button2} style={{backgroundColor:'none!important'}}>
                                        <span className={Styles.button1Text} style={{fontSize:"18px", color:'#122d40'}}>مشاهده محصولات</span>
                                    </a>
                                </div>
                            </div>
                            <div style={{paddingTop:'85px', width:'49%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <img src={require('../../assets/img/homeBox1.png')} alt="shopping" style={{maxWidth:'590px', width:'100%', height:'auto'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.floatBox}>
                        <div className={Styles.floatBoxItem}>
                            <img src={require('../../assets/img/Transportation.png')} alt="shopping" className={Styles.floatBoxItemImg}/>
                            <div>
                                <span style={{fontSize:'23px', display:'block', paddingBottom:'5px'}}>حمل و نقل رایگان</span>
                                <span style={{fontSize:'16px', color:'gray', display:"block"}}>تا ۵۰۰,۰۰۰ تومان</span>
                            </div>
                        </div>
                        <div className={Styles.floatBoxItem}>
                            <img src={require('../../assets/img/Transportation.png')} alt="shopping" className={Styles.floatBoxItemImg}/>
                            <div>
                                <span style={{fontSize:'23px', display:'block', paddingBottom:'5px'}}>استرداد رایگان</span>
                                <span style={{fontSize:'16px', color:'gray', display:"block"}}>تا ۳ روز پس از خرید</span>
                            </div>
                        </div>
                        <div className={Styles.floatBoxItem}>
                            <img src={require('../../assets/img/Transportation.png')} alt="shopping" className={Styles.floatBoxItemImg}/>
                            <div>
                                <span style={{fontSize:'23px', display:'block', paddingBottom:'5px'}}>پرداخت امن</span>
                                <span style={{fontSize:'16px', color:'gray', display:"block"}}>پرداختی امن ۱۰۰٪</span>
                            </div>
                        </div>
                        <div className={Styles.floatBoxItem}>
                            <img src={require('../../assets/img/Transportation.png')} alt="shopping" className={Styles.floatBoxItemImg}/>
                            <div>
                                <span style={{fontSize:'23px', display:'block', paddingBottom:'5px'}}>۲۴/۷ پشتیبانی</span>
                                <span style={{fontSize:'16px', color:'gray', display:"block"}}>با ما تماس بگیرید</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.space}></div>
                    <div className={Styles.box2}>
                        <div className={Styles.box2Column1}>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:'44.6%', width:'100%'}}>
                                <div className={Styles.box2Column1Item1}>
                                    <span style={{fontSize:'23px', color:'white',display:'block', textAlign:'left', marginRight:'15px', marginTop:'30px', marginBottom:'10px'}}>تخفیف ۵۰٪</span>
                                    <span style={{fontSize:'45px', color:'white',display:'block', textAlign:'left', marginRight:'15px'}}>سس ها</span>
                                </div>
                                <div className={Styles.box2Column1Item2}>
                                    <span style={{fontSize:'23px', color:'#01e281',display:'block', textAlign:'left', marginLeft:'55px', marginTop:'50px', marginBottom:'20px'}}>تخفیف ۵۰٪</span>
                                    <span style={{fontSize:'45px', color:'#122d40',display:'block', textAlign:'left', marginLeft:'55px'}}>تنقلات</span>
                                </div>
                            </div>
                            <div className={Styles.box2Column1Item3}>
                                <span style={{fontSize:'40px', color:'white',display:'block', textAlign:'left', marginRight:'55px', marginTop:'50px', marginBottom:'20px'}}>تخفیف ویژه ۵۰٪</span>
                                <span style={{fontSize:'45px', color:'white',display:'block', textAlign:'left', marginRight:'55px'}}>روی تمامی میوه ها</span>
                                <a className={Styles.button7}>
                                    <span className={Styles.button7Text} style={{fontSize:"18px"}}>الان بخرید</span>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.box2Column2}>
                            <span style={{fontSize:'23px', color:'white',display:'block', marginRight:'30px', marginTop:'40px', marginBottom:'10px'}}>تخفیف ۵۰٪</span>
                            <span style={{fontSize:'45px', color:'white',display:'block', width:'80%', marginRight:'30px'}}>سبزیجات تازه و با کیفیت</span>
                            <a className={Styles.button3}>
                                <span className={Styles.button3Text} style={{fontSize:"18px"}}>الان بخرید</span>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.space}></div>
                    <div className={Styles.box3}>
                        <div>
                            <span style={{fontSize:'40px', color:'black'}}>دسته بندی</span>
                            <span style={{fontSize:'40px', color:'#01e281'}}> محصولات ما</span>
                        </div>
                        <div style={{width:'100%', marginTop:'40px'}}>
                            <div className={Styles.offItemsA}>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s1.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>ماهی<br/> و آبزیان</span>
                                </div>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s2.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>میوه و<br/>سبزیجات</span>
                                </div>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s3.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>نان و<br/>غلات</span>
                                </div>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s4.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>لبنیات و<br/>پروتئین</span>
                                </div>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s5.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>شوینده و<br/>نظافتی</span>
                                </div>
                                <div className={Styles.offItemA} style={{textAlign: 'center'}}>
                                    <img className={Styles.fish} alt='fish' src={require('../../assets/img/s6.png')}/>
                                    <span style={{fontSize:'20px', paddingTop:'17px', color:'black'}}>گوشت و<br/>استیک</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.space}></div>
                    <div className={Styles.box4}>
                        <div className={Styles.box4Title} style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}>
                            <div style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                                <span style={{fontSize:'40px', color:'black'}}>پرفروش ترین</span>
                                <span style={{fontSize:'40px', color:'#01e281'}}> محصولات</span>
                            </div>
                            <a className={Styles.button4}>
                                <span className={Styles.button4Text} style={{fontSize:"18px"}}>همه محصولات</span>
                            </a>
                        </div>
                        <div className={Styles.box4Items} style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <divs className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </divs>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.box4Items} style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:'50px'}}>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                            <div className={Styles.box4Item}>
                                <img alt='فیله مرغ' src={require('../../assets/img/filehMorgh.jpg')} style={{width:'70%'}}/>
                                <div style={{width:'70%', marginTop:'-40px'}}>
                                    <span className={Styles.box4ItemTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>فیله مرغ</span>
                                    <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>۶۹۰۰۰ تومان</span>
                                </div>
                                <div className={Styles.box4ItemOption}>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به علاقمندی ها</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faHeart} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>افزودن به مقایسه</span>
                                        <FontAwesomeIcon className={Styles.icon} icon={faCodeCompare} />
                                    </a>
                                    <a className={Styles.love}>
                                        <span className={Styles.box4ItemOptionTitle}>نمایش سریع</span>
                                        <FontAwesomeIcon className={Styles.icon}icon={faMagnifyingGlass} />
                                    </a>
                                </div>
                                <a className={Styles.button5}>
                                    <FontAwesomeIcon className={Styles.button5Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
                                    <span className={Styles.button5Text}>افزودن به سبد خرید</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.space}></div>
                    <div className={Styles.box5}>
                        <div className={Styles.box5Text} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', width:'49%', height:'550px'}}>
                            <h1 style={{fontSize:'40px', textAlign:'center', color:'white',margin:'0'}}>سوپر مارکت اکسترا</h1>
                            <span style={{fontSize:'60px', textAlign:'center', color:'white', marginTop:'20px', marginBottom:'30px'}}>سفارش با موبایل</span>
                            <span style={{fontSize:'15px', textAlign:'center', color:'white'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد.</span>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:'30px', width:'70%'}}>
                                <a>
                                    <img style={{width:'170px', height:'auto'}} src={require('../../assets/img/appStore.png')} alt=""/>
                                </a>
                                <a>
                                    <img style={{width:'195px', height:'auto'}} src={require('../../assets/img/googleplay.png')} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.box5Img} style={{width:'40%', height:'fit-content', display:'flex', alignItems:'center'}}>
                            <img style={{width:'100%'}} src={require('../../assets/img/mobile.png')} alt=""/>
                        </div>
                    </div>
                    <div className={Styles.space}></div>
                    <div className={Styles.box6}>
                        <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:'25px'}}>
                            <div>
                                <span style={{fontSize:'40px', color:'black'}}>جدید ترین</span>
                                <span style={{fontSize:'40px', color:'#01e281'}}> اخبار و مقالات</span>
                            </div>
                            <div></div>
                        </div>
                        <div className={Styles.box6Items} style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <div className={Styles.box6Item}>
                                <a className={Styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>بروزرسانی ها</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src={require('../../assets/img/box6Item1.jpg')} alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>میوه و صیفی جات در سوپر مارکت</span>
                                </div>
                                <div className={Styles.box6ItemLink}>
                                <FontAwesomeIcon  icon={faLink} />
                                </div>
                            </div>
                            <div className={Styles.box6Item}>
                                <a className={Styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>اخبار</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src={require('../../assets/img/news.jpg')} alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>بهینه سازی گوگل</span>
                                </div>
                                <FontAwesomeIcon className={Styles.box6ItemLink} icon={faLink} />
                            </div>
                            <div className={Styles.box6Item}>
                                <a className={Styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>مصاحبه</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src={require('../../assets/img/mosahebe.jpg')} alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>سوپر مارکتی با جدیدترین کالا ها</span>
                                </div>
                                <FontAwesomeIcon className={Styles.box6ItemLink} icon={faLink} />
                            </div>
                            <div className={Styles.box6Item}>
                                <a className={Styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>آموزش ها</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src={require('../../assets/img/educate.jpg')} alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>نزدیکترین سوپرمارکت به محل زندگی</span>
                                </div>
                                <FontAwesomeIcon className={Styles.box6ItemLink} icon={faLink} />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.space6}></div>
                </div>
            </div>
            <Footer/>
            <AppBar />

        </div>
    );
};

export default Home;