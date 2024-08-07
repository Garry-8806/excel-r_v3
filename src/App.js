import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Products from './components/products';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import './styles/index.css';

import HomePage from './pages/HomePage';
// import Layout from './components/Layout';
import ContactUs from './pages/Contactus';

const App = () => {
  return (
      <>
      <div className='nav'>
   </div>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/home" element={<HomePage />} />
          
      
        </Routes>
      </Router>
    </Provider>
      </>
  );
};

export default App;
