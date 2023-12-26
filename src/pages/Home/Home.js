import React from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import AppBar from "../../components/AppBar/AppBar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
import HomeFeature from "../../components/HomeFeature/HomeFeature";
import Grid from "@mui/material/Grid";
import ProductsCategorization from "../../components/productsCategorization/productsCategorization";
import styles from './home.module.css';
import LinkIcon from "@mui/icons-material/Link";

const Home = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <SiteHeader/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div className={styles.container}>
                    <div className={styles.box1}>
                        <div className={styles.box1B} style={{width:'91vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around'}}>
                            <div className={styles.box1Item1} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', width:'49%', height:'100%'}}>
                                <h1 className={styles.box1Item1H1} style={{fontSize:'32px', textAlign:'center', color:'#01e281',margin:'0'}}>سوپر مارکت اکسترا</h1>
                                <span className={styles.box1Item1Title} style={{fontSize:'60px', textAlign:'center', padding:'30px 0'}}>تازه تر از همه جا</span>
                                <span className={styles.box1Item1Text} style={{fontSize:'22px', textAlign:'right', color:'#535353'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.</span>
                                <div className={styles.box1Item1Buttons} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:'30px', width:'100%'}}>
                                    <a className={styles.button1}>
                                        <span className={styles.button1Text} style={{fontSize:"18px", color:'white'}}>۲۵٪ تخفیف ویژه</span>
                                    </a>
                                    <a className={styles.button2} style={{backgroundColor:'none!important'}}>
                                        <span className={styles.button1Text} style={{fontSize:"18px", color:'#122d40'}}>مشاهده محصولات</span>
                                    </a>
                                </div>
                            </div>
                            <div style={{paddingTop:'85px', width:'49%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <img src="/img/homeBox1.1.png" alt="shopping" style={{maxWidth:'590px', width:'100%', height:'auto'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.floatBox}>
                        <HomeFeature
                            title="حمل و نقل رایگان"
                            description="تا ۵۰۰,۰۰۰ تومان"
                            imageSrc="/img/Transportation.png"
                        />
                        <HomeFeature
                            title="استرداد رایگان"
                            description="تا ۳ روز پس از خرید"
                            imageSrc="/img/Transportation.png"
                        />
                        <HomeFeature
                            title="پرداخت امن"
                            description="پرداختی امن ۱۰۰٪"
                            imageSrc="/img/Transportation.png"
                        />
                        <HomeFeature
                            title="۲۴/۷ پشتیبانی"
                            description="با ما تماس بگیرید"
                            imageSrc="/img/Transportation.png"
                        />
                    </div>
                    <div className={styles.space}/>
                    <Grid container columnSpacing={4} width={'92vw'} className={styles.box2}>
                        <Grid item xs={12} lg={8}>
                            <Grid container className={styles.box2Column1}>
                                <Grid item xs={12} lg={6} className={styles.box2Column1Item1}>
                                    <span style={{fontSize:'23px', color:'white',display:'block', textAlign:'left', marginRight:'15px', marginTop:'30px', marginBottom:'10px'}}>تخفیف ۵۰٪</span>
                                    <span style={{fontSize:'45px', color:'white',display:'block', textAlign:'left', marginRight:'15px'}}>سس ها</span>
                                </Grid>
                                <Grid item xs={12} lg={6} className={styles.box2Column1Item2}>
                                    <span className={styles.box2Column1Item2Text1} style={{fontSize:'23px', color:'#01e281',display:'block', textAlign:'left', marginLeft:'55px', marginTop:'50px', marginBottom:'20px'}}>تخفیف ۵۰٪</span>
                                    <span className={styles.box2Column1Item2Text2} style={{fontSize:'45px', color:'#122d40',display:'block', textAlign:'left', marginLeft:'55px'}}>تنقلات</span>
                                </Grid>
                                <Grid item xs={12} className={styles.box2Column1Item3}>
                                    <span className={styles.box2Column1Item3Text1} style={{fontSize:'40px', color:'white',display:'block', textAlign:'left', marginRight:'55px', marginTop:'50px', marginBottom:'20px'}}>تخفیف ویژه ۵۰٪</span>
                                    <span className={styles.box2Column1Item3Text2} style={{fontSize:'45px', color:'white',display:'block', textAlign:'left', marginRight:'55px'}}>روی تمامی میوه ها</span>
                                    <a className={styles.button7}>
                                        <span className={styles.button7Text} style={{fontSize:"18px"}}>الان بخرید</span>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4} className={styles.box2Column2}>
                            <span style={{fontSize:'23px', color:'white',display:'block', marginRight:'30px', marginTop:'40px', marginBottom:'10px'}}>تخفیف ۵۰٪</span>
                            <span style={{fontSize:'45px', color:'white',display:'block', width:'80%', marginRight:'30px'}}>سبزیجات تازه و با کیفیت</span>
                            <a className={styles.button3}>
                                <span className={styles.button3Text} style={{fontSize:"18px"}}>الان بخرید</span>
                            </a>
                        </Grid>
                    </Grid>
                    <div className={styles.space}/>
                    <div className={styles.box3}>
                        <div className={styles.box3Title}>
                            <span style={{fontSize:'40px', color:'black'}}>دسته بندی</span>
                            <span style={{fontSize:'40px', color:'#01e281'}}> محصولات ما</span>
                        </div>
                        <div className={styles.box3Items} style={{width:'100%', marginTop:'40px'}}>
                            <ProductsCategorization imgSrc={"/img/s1.png"} title={"ماهی و آبزیان"} titleColor={"black"}/>
                            <ProductsCategorization imgSrc={"/img/s2.png"} title={"میوه و سبزیجات"} titleColor={"black"}/>
                            <ProductsCategorization imgSrc={"/img/s3.png"} title={"نان و غلات"} titleColor={"black"}/>
                            <ProductsCategorization imgSrc={"/img/s4.png"} title={"لبنیات و پروتئین"} titleColor={"black"}/>
                            <ProductsCategorization imgSrc={"/img/s5.png"} title={"شوینده و نظافتی"} titleColor={"black"}/>
                            <ProductsCategorization imgSrc={"/img/s6.png"} title={"گوشت و استیک"} titleColor={"black"}/>
                        </div>
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.box4}>
                        <div className={styles.box4Title} style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}>
                            <div className={styles.box4TitleText} style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                                <span style={{fontSize:'40px', color:'black'}}>پرفروش ترین</span>
                                <span style={{fontSize:'40px', color:'#01e281'}}> محصولات</span>
                            </div>
                            <a className={styles.button4}>
                                <span className={styles.button4Text} style={{fontSize:"18px"}}>همه محصولات</span>
                            </a>
                        </div>
                        <div className={styles.box4Items} style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Product imgSrc={'/img/filehMorgh.jpg'} title={"فیله مرغ"} price={"۷۰۰۰۰ تومان"}/>
                            <Product imgSrc={'/img/water.jpg'} title={"آب معدنی"} price={"۱۰۰۰۰ تومان"}/>
                            <Product imgSrc={'/img/water.jpg'} title={"آب معدنی"} price={"۱۰۰۰۰ تومان"}/>
                            <Product imgSrc={'/img/water.jpg'} title={"آب معدنی"} price={"۱۰۰۰۰ تومان"}/>
                        </div>
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.box5}>
                        <div className={styles.box5Text} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', width:'49%', height:'fit-content', marginBottom:'55px'}}>
                            <h1 className={styles.box5TextH1} style={{fontSize:'40px', textAlign:'center', color:'white', opacity:'95%',margin:'0'}}>سوپر مارکت اکسترا</h1>
                            <span className={styles.box5Text1} style={{fontSize:'60px', textAlign:'center', color:'white', marginTop:'20px', marginBottom:'30px'}}>سفارش با موبایل</span>
                            <span className={styles.box5Text2} style={{fontSize:'15px', textAlign:'center', color:'white', opacity:'95%'}}>سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد.</span>
                            <div className={styles.box5Button} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:'30px', width:'90%'}}>
                                <a>
                                    <img style={{width:'195px', height:'auto'}} src="/img/googleplay.png" alt=""/>
                                </a>
                                <a>
                                    <img style={{width:'170px', height:'auto'}} src="/img/appStore.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.box5Img} style={{width:'40%', height:'fit-content', display:'flex', alignItems:'center'}}>
                            <img style={{width:'100%'}} src="/img/mobile.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.box6}>
                        <div className={styles.box6Title} style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginBottom:'25px'}}>
                            <span style={{fontSize:'40px', color:'black'}}>جدید ترین</span>
                            <span style={{fontSize:'40px', color:'#01e281'}}> اخبار و مقالات</span>
                        </div>
                        <div className={styles.box6Items} style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
                            <div className={styles.box6Item}>
                                <a className={styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>بروزرسانی ها</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src="/img/box6Item1.jpg" alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>میوه و صیفی جات در سوپر مارکت</span>
                                </div>
                                <div className={styles.box6ItemLink}>
                                <LinkIcon />
                                </div>
                            </div>
                            <div className={styles.box6Item}>
                                <a className={styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>اخبار</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src="/img/news.jpg" alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>بهینه سازی گوگل</span>
                                </div>
                                <LinkIcon className={styles.box6ItemLink} />
                            </div>
                            <div className={styles.box6Item}>
                                <a className={styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>مصاحبه</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src="/img/mosahebe.jpg" alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>سوپر مارکتی با جدیدترین کالا ها</span>
                                </div>
                                <LinkIcon className={styles.box6ItemLink} />
                            </div>
                            <div className={styles.box6Item}>
                                <a className={styles.button6}>
                                    <span style={{fontSize:"13px", color:"white"}}>آموزش ها</span>
                                </a>
                                <img width={'100%'} style={{borderRadius:'20px'}} src="/img/educate.jpg" alt=""/>
                                <div style={{width:'97%', display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'15px'}}>
                                    <span style={{width:'120px', fontSize:'15px', color:'#01e281', textAlign:'center', backgroundColor:'white', zIndex:'1'}}>۲۱ فروردین ۱۴۰۲</span>
                                    <span style={{width:'100%', fontSize:'15px', color:'#49607e', textAlign:'right', paddingTop:'20px' , marginTop:'-12px', borderTop:'rgba(128, 128, 128, 0.2) solid 1px'}}>نزدیکترین سوپرمارکت به محل زندگی</span>
                                </div>
                                <LinkIcon className={styles.box6ItemLink} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.space6}></div>
                </div>
            </div>
            <Footer/>
            <AppBar />
        </div>
    );
};

export default Home;