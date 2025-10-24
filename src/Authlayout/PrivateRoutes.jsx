import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Component/Loading';

const PrivateRoutes = ({children}) => {

  const location=useLocation
  const {user,loading}=use(AuthContext)

  if(loading){
    return <Loading/>
  }

  if(user && user.email){
    return children
  }
  return (
   <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
  );
};

export default PrivateRoutes;