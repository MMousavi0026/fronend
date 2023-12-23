import React from 'react';
import styles from "./siteHeader.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Popover from "@mui/material/Popover";

const NavItemsOff = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <section>
            <button className={styles.navItems} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                <ShoppingBasketIcon fontSize={'20'} style={{fontSize: "21px", marginLeft: "6px"}}/>
                <span style={{fontSize: "1.5vw"}}>تخفیفات ویژه</span>
                <ArrowDropDownIcon style={{fontSize: "35px"}}/>
            </button>
            <Popover id="mouse-over-popover" sx={{pointerEvents: 'none'}} open={open} anchorEl={anchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'left',}} transformOrigin={{vertical: 'top', horizontal: 'left',}} onClose={handlePopoverClose} disableRestoreFocus PaperProps={{sx: {backgroundColor: 'transparent', boxShadow:'none'},}}>
                <div className={styles.offItems}>
                    <div className={styles.offItem} style={{textAlign: 'center'}}>
                        <img className={styles.fish} alt='fish' src="/img/s1.png"/>
                        <span style={{fontSize: '20px', padding: '17px 0', color: 'white'}}>ماهی<br/> و آبزیان</span>
                        <span style={{fontSize: '14px', color: '#01e281'}}>۲۰٪ تخفیف</span>
                    </div>
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
            </Popover>
        </section>
    );
};

export default NavItemsOff;