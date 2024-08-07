import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions'; // Ensure this path is correct
import '../styles/RegistrationForm.css';

const RegisterPage = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(firstName, lastName, email, password, mobile, dob));
    history.push('/');
  };

  return (
    <div className="register-container">
      {error && <p className="register-error">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
      <h1 className="register-title">Welcome to E-COM EXP</h1>
      <img src="student-card_16680029.png" alt="Login" className="login-image" />
        <input
          className="register-input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          className="register-input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          className="register-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="register-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          className="register-input"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile No"
          required
        />
        <input
          className="register-input"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Date of Birth"
          required
        />
        <button className="register-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
