import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    
    async function signUp (email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, "users", email), {
            savedShow: []
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      });
    
      return () => {
        unsubscribe();
      }
    }, [])
    

    return(
        <AuthContext.Provider value={{ signUp, signIn, signOutUser, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}