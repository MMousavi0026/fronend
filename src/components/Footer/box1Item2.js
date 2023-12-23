import React from 'react';
import Styles from "./footer.module.css";
import LinkIcon from "@mui/icons-material/Link";

const Box1Item2 = ({title}) => {
    return (
        <div className={Styles.box1Item2}>
            <LinkIcon fontSize={'15'} className={Styles.box1ItemIcon}/>
            <span style={{transition: 'color .3s', fontSize: '16px', color: 'white'}}>{title}</span>
        </div>
    );
};

export default Box1Item2;