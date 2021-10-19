import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const createUser = ({ name, email, password }) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateName(name);
                window.history.go(0);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const updateName = (name) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: ""

        })
            .then(() => {
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const signInWithEmail = ({ email, password }) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                window.history.go(0);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => {
                setUser(null);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth])

    return {
        user,
        error,
        isLoading,
        googleSignIn,
        googleSignOut,
        createUser,
        signInWithEmail
    }
}

export default useFirebase;