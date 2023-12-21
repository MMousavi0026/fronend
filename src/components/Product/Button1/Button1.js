import React from 'react';
import Styles from "./Button1.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Button1 = () => {
    return (
        <button className={Styles.button1}>
            <FontAwesomeIcon className={Styles.button1Text} style={{marginLeft:'10px'}} icon={faCartShopping} />
            <span className={Styles.button1Text}>افزودن به سبد خرید</span>
        </button>
    );
};

export default Button1;