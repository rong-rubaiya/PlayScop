import React,{  createContext, useEffect, useState} from 'react';
import app from '../Fairebase/fairebase.config';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";





const auth = getAuth(app);

const AuthProvider = ({children}) => {
  

  const googleProvider=new GoogleAuthProvider()

  // change location of loading
  const [loading,setLoading]=useState(true) 


  const [user,setUser]=useState(null)

  // forget pass

const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email)
   
};



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

  const googlesignIn=()=>{
    return signInWithPopup(auth,googleProvider)
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
    setLoading,
    googlesignIn,
    resetPassword
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;