import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/LoginForm.css'; // Ensure the path to CSS file is correct


const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push('/home');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <img src="user_5323360.png" alt="Login" className="login-image" />
        {error && <p className="login-error">{error}</p>}
        <input
          className="login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit">Login</button>
        <p className="login-register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
      <footer>
        <p>© 2024 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
