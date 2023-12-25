import React, {useState} from 'react';
import MenuButton from "../MenuButton";
import styles from "./siteHeader.module.css";

const NavItemsOff = () => {
    const [open, setOpen] = useState(false);

    return (
        <section>
            <MenuButton
                open={open}
                title="تخفیفات ویژه"
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                className={styles.navItems}
            >
                <div className={styles.offItemsF+" "+styles.navItems}>
                    <div className={styles.offItem} style={{textAlign: 'center'}}>
                        <img className={styles.fish} alt='fish' src="/img/s2.png"/>
                        <span style={{fontSize: '20px', padding: '17px 0', color: 'white'}}>میوه و<br/>سبزیجات</span>
                        <span style={{fontSize: '14px', color: '#01e281'}}>۴۰٪ تخفیف</span>
                    </div>
                    <div className={styles.offItem} style={{textAlign: 'center'}}>
                        <img className={styles.fish} alt='fish' src="/img/s3.png"/>
                        <span style={{fontSize: '20px', padding: '17px 0', color: 'white'}}>نان و<br/>غلات</span>
                        <span style={{fontSize: '14px', color: '#01e281'}}>۱۵٪ تخفیف</span>
                    </div>
                    <div className={styles.offItem} style={{textAlign: 'center'}}>
                        <img className={styles.fish} alt='fish' src="/img/s4.png"/>
                        <span style={{fontSize: '20px', padding: '17px 0', color: 'white'}}>لبنیات و<br/>پروتئین</span>
                        <span style={{fontSize: '14px', color: '#01e281'}}>۵۰٪ تخفیف</span>
                    </div>
                    <div className={styles.offItem} style={{textAlign: 'center'}}>
                        <img className={styles.fish} alt='fish' src="/img/s5.png"/>
                        <span style={{fontSize: '20px', padding: '17px 0', color: 'white'}}>گوشت<br/>و مرغ</span>
                        <span style={{fontSize: '14px', color: '#01e281'}}>۴۵٪ تخفیف</span>
                    </div>
                </div>
            </MenuButton>
        </section>
    );
};

export default NavItemsOff;