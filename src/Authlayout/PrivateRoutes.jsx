import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
  const {user}=use(AuthContext)

  if(user && user.email){
    return children
  }
  return (
   <Navigate to={"/auth/register"}></Navigate>
  );
};

export default PrivateRoutes;