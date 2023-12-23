import React from 'react';
import './styles/global.css'
import './styles/font.css'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
