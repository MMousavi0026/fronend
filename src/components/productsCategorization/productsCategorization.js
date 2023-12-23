import React from 'react';
import styles from "./productsCategorization.module.css";

const ProductsCategorization = ({imgSrc, title}) => {
    return (
        <div className={styles.item}>
            <img className={styles.fish} alt='item' src={imgSrc}/>
            <span style={{fontSize: '20px', paddingTop: '17px', color: 'black'}}>{title}</span>
        </div>
    );
};

export default ProductsCategorization;