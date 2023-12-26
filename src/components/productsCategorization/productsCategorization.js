import React from 'react';
import styles from "./productsCategorization.module.css";

const ProductsCategorization = ({imgSrc, title, titleColor, children}) => {
    return (
        <div className={styles.item}>
            <img className={styles.fish} alt='item' src={imgSrc}/>
            <span style={{fontSize: '20px', paddingTop: '17px', color: titleColor}}>{title}</span>
            <span style={{fontSize: '14px', paddingTop: '17px', color: "#01e281"}}>{children}</span>
        </div>
    );
};

export default ProductsCategorization;