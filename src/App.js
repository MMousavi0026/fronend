import React from 'react';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import {ThemeProvider} from "@mui/material";
import theme from "./components/themeConfig";
import {Provider} from "react-redux";
import store from "./redux/store";
import './styles/global.css'
import './styles/font.css'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/products' element={<Products/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
