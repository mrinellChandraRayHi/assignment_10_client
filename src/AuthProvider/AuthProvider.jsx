import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    // loader
    const [loader, setLoader]=useState(true);
    // user
    const [user, setUser]=useState(null);
    // createUser
    const createUser=(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn
    const signIn=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signOut
    const signOUT=()=>{
        setLoader(true);
        return signOut(auth);
    }
    // obserrving
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentuser)=>{
            setLoader(false);
            setUser(currentuser);
            console.log('observing', currentuser);
        });
        return(()=>{
            unsubscribe();
        })
    })
    const authInfo={
        loader,
        createUser,
        signIn,
        signOUT,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;