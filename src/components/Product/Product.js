import React from 'react';
import Styles from './Product.module.css';
import {faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ProductOption from "./ProductOption/ProductOption";
import Button1 from "./Button1/Button1";

const Product = ({imgSrc, title, price}) => {

    return (
        <div className={Styles.product}>
            <img alt={title} src={require({imgSrc})} style={{width:'70%'}}/>
            <div style={{width:'70%', marginTop:'-40px'}}>
                <span className={Styles.productTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>{title}</span>
                <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>{price}</span>
            </div>
            <div className={Styles.productOption}>
                <ProductOption iconName={faHeart} title={'افزودن به علاقمندی ها'}/>
                <ProductOption iconName={faCodeCompare} title={'افزودن به مقایسه'}/>
                <ProductOption iconName={faMagnifyingGlass} title={'نمایش سریع'}/>
            </div>
            <Button1/>
        </div>
    );
};

export default Product;