import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/Header';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(login(credentials));
  };

  const { from } = location.state || { from: { pathname: '/' } };

  if (isAuth) {
    navigate(from.pathname, { replace: true });
    return null; // Ensure no additional content is rendered after navigation
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="login">
        <h3 className="login-text">Login</h3>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </>
  );
};

export default LogIn;
