import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signup with gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signup with facebook
  const signUpWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  }

  // signup with github
  const signUpWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  }

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }); 
  };

  // check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoading(false);      
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    signUpWithFacebook,
    signUpWithGithub,
    login,
    logOut,
    updateUserProfile,
    loading,
  };

  return (  
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
