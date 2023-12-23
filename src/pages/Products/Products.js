import React from 'react';
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import AppBar from "../../components/AppBar/AppBar";
import {Breadcrumbs} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Styles from './products.module.css'

const Products = () => {
    const breadcrumbs = [
        <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Link>,
        <Typography fontSize={"18px"} key="2" color="text.primary">
            محصولات
        </Typography>,
    ];

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <SiteHeader/>
            <div>
                <div className={Styles.container}>
                    <div style={{height:'70px'}}></div>
                    <div className={Styles.box1}>
                        <span style={{fontSize:'25px'}}>فروشگاه</span>
                        <div>
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="16px" />} aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </div>
                    </div>
                    <div style={{height:'70px'}}></div>
                    <div className={Styles.box2}>
                        <div className={Styles.box2Column1}></div>
                        <div className={Styles.box2Column2}></div>
                    </div>
                </div>
            </div>
            <footer/>
            <AppBar/>
        </div>
    );
};

export default Products;