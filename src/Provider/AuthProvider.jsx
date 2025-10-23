import React,{  createContext, useEffect, useState} from 'react';
import app from '../Fairebase/fairebase.config';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";




const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)

  const createUser= (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return()=>{unsubscribe()}
  },[])

  const authData={
    user,
    setUser,
    createUser
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;