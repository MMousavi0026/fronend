import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./menuButtonAcces.module.css";

const MenuButtonAcces = (
    {
        title,
        open,
        onOpen,
        onClose,
        MenuProps,
        children,
        ...props
    }
) => {
    const internalTarget = React.useRef(null);

    const handleButtonKeyDown = (event) => {
        if(!internalTarget.current){
            internalTarget.current = event.currentTarget;
            if(onOpen) onOpen();
        }
    };

    const handleButtonKeyUp = () => {
        if(internalTarget.current){
            internalTarget.current = null;
            if(onClose) onClose();
        }
    };

    return (
        <Button
            onMouseEnter={handleButtonKeyDown}
            {...props}
        >
            <span style={{fontSize: "1.5vw"}}>{title}</span>
            <ArrowDropDownIcon style={{fontSize: 35}}/>
            <Menu
                open={open}
                anchorEl={internalTarget.current}
                onMouseLeave={handleButtonKeyUp}
                {...MenuProps}
                className={styles.offItemsWrapper}
                hideBackdrop
                slotProps={{
                    paper: {
                        className: styles.offItemsWrapper1
                    }
                }}
            >

                {children}
            </Menu>
        </Button>
    );
}

export default MenuButtonAcces;