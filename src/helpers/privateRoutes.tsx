import React from 'react';
import { Route, useNavigate, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authenticationService';
const navigate = useNavigate();

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props:any) => isAuthenticated() ? <Component {...props} /> : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;