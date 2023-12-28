import React, {useState} from 'react';
import styles from './Product.module.css';
import {faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ProductOption from "./ProductOption/ProductOption";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popover from "@mui/material/Popover";
import {useDispatch, useSelector} from "react-redux";
import {setCartCount} from "../../redux/slices/cartData";

const Product = ({imgSrc, title, price}) => {
    const dispatch = useDispatch();
    const cart = useSelector(x => x.cartData);

    const increaseNumberShoppingCart = () => dispatch(setCartCount(cart + 1))

    return (
        <div className={styles.product}>
            <img alt={title} src={imgSrc} style={{width: '70%'}}/>
            <div style={{width: '70%', marginTop: '-40px'}}>
                <span className={styles.productTitle}
                      style={{
                          display: 'block',
                          fontSize: '22px',
                          color: 'black',
                          textAlign: 'center',
                          width: '100%',
                          transition: 'color .3s'
                      }}
                >
                    {title}
                </span>
                <span style={{
                    display: 'block',
                    fontSize: '16px',
                    color: 'gray',
                    textAlign: 'center',
                    width: '100%',
                    marginTop: '10px'
                }}>{price}</span>
            </div>
            <div className={styles.productOption}>
                <ProductOption iconName={faHeart} title={'افزودن به علاقمندی ها'}/>
                <ProductOption iconName={faCodeCompare} title={'افزودن به مقایسه'}/>
                <ProductOption iconName={faMagnifyingGlass} title={'نمایش سریع'}/>
            </div>
            <button className={styles.button1} onClick={increaseNumberShoppingCart}>
                <FontAwesomeIcon className={styles.button1Text} style={{marginLeft: '10px'}} icon={faCartShopping}/>
                <span className={styles.button1Text}>افزودن به سبد خرید</span>
            </button>
        </div>
    );
};

export default Product;