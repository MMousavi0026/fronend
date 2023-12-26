import React, {useState} from 'react';
import styles from "./siteHeader.module.css";
import ProductsCategorization from "../productsCategorization/productsCategorization";
import MenuButtonOff from "./MenuButtonOff";

const NavItemsOff = () => {
    const [open, setOpen] = useState(false);

    return (
        <section>
            <MenuButtonOff
                open={open}
                title="تخفیفات ویژه"
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                style={{color: 'white', cursor:'pointer', marginLeft:'30px'}}
            >
                <div className={styles.offItems}>
                    <ProductsCategorization imgSrc={"/img/s1.png"} title={"ماهی و آبزیان"} titleColor={"white"} className={styles.navItem}>۲۰٪ تخفیف</ProductsCategorization>
                    <ProductsCategorization imgSrc={"/img/s2.png"} title={"میوه و سبزیجات"} titleColor={"white"}>۲۰٪ تخفیف</ProductsCategorization>
                    <ProductsCategorization imgSrc={"/img/s3.png"} title={"نان و غلات"} titleColor={"white"}>۲۰٪ تخفیف</ProductsCategorization>
                    <ProductsCategorization imgSrc={"/img/s4.png"} title={"لبنیات و پروتئین"} titleColor={"white"}>۲۰٪ تخفیف</ProductsCategorization>
                    <ProductsCategorization imgSrc={"/img/s5.png"} title={"شوینده و نظافتی"} titleColor={"white"}>۲۰٪ تخفیف</ProductsCategorization>
                    <ProductsCategorization imgSrc={"/img/s6.png"} title={"گوشت و استیک"} titleColor={"white"}>۲۰٪ تخفیف</ProductsCategorization>
                </div>
            </MenuButtonOff>
        </section>
    );
};

export default NavItemsOff;