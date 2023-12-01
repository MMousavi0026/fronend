import React from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import AppBar from "../components/AppBar/AppBar";
import Styles from './home.module.css';

const Home = (props) => {
    return (
        <div>
            <SiteHeader/>
            <AppBar/>

            <div className={Styles.container}>
                <div></div>
            </div>
        </div>
    );
};

export default Home;