import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
