import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; // Ensure the path to your CSS file is correct

const Navbar = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src='./logo.png' alt='Shopaholic Haven' className="navbar-logo" />
        <span className="navbar-name">Shopaholic Haven</span>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {user ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
