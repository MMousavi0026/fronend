import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MenuButton = (
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
            <ShoppingBasketIcon style={{fontSize: 21, marginLeft: "6px"}}/>
            <span style={{fontSize: "1.5vw"}}>{title}</span>
            <ArrowDropDownIcon style={{fontSize: 35}}/>
            <Menu
                open={open}
                anchorEl={internalTarget.current}
                onMouseLeave={handleButtonKeyUp}
                {...MenuProps}
            >
                {children}
            </Menu>
        </Button>
    );
}

export default MenuButton;