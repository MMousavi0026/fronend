import React from 'react';
import Styles from './Product.module.css';
import {faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ProductOption from "./ProductOption/ProductOption";
import Button1 from "./Button1/Button1";
import Popover from "@mui/material/Popover";

const Product = ({imgSrc, title, price}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className={Styles.product}  aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <img alt={title} src={imgSrc} style={{width:'70%'}}/>
            <div style={{width:'70%', marginTop:'-40px'}}>
                <span className={Styles.productTitle} style={{display:'block',fontSize:'22px', color:'black', textAlign:'center', width:'100%', transition:'color .3s'}}>{title}</span>
                <span style={{display:'block', fontSize:'16px', color:'gray', textAlign:'center', width:'100%', marginTop:'10px'}}>{price}</span>
            </div>
            <div className={Styles.productOption}>
                <ProductOption iconName={faHeart} title={'افزودن به علاقمندی ها'}/>
                <ProductOption iconName={faCodeCompare} title={'افزودن به مقایسه'}/>
                <ProductOption iconName={faMagnifyingGlass} title={'نمایش سریع'}/>
            </div>
            <Popover id="mouse-over-popover" sx={{pointerEvents: 'none'}} open={open} anchorEl={anchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'left',}} transformOrigin={{vertical: 'top', horizontal: 'left',}} onClose={handlePopoverClose} disableRestoreFocus PaperProps={{sx: {backgroundColor: 'transparent', boxShadow:'none'},}}>
                <Button1/>
            </Popover>
        </div>
    );
};

export default Product;