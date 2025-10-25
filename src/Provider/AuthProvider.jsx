import React,{  createContext, useEffect, useState} from 'react';
import app from '../Fairebase/fairebase.config';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




const auth = getAuth(app);

const AuthProvider = ({children}) => {

  // change location of loading
  const [loading,setLoading]=useState(true) 


  const [user,setUser]=useState(null)

  // create with email and password

  const createUser= (email,password)=>{
    setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
  }

  // create sign in 

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // signout

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return()=>{unsubscribe()}
    
  },[])

  

  const authData={
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;