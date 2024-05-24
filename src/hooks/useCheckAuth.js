import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { startLoadingNotes } from '../store/journal/thunks';

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth); //take some  a element carpeted auth
    
    const dispath = useDispatch();

    useEffect(() => {
       // onAuthStateChanged
        onAuthStateChanged(FirebaseAuth, async (user) => {
            //console.log(user)
            if (!user) return dispath(logout()); //if don`t exist user called logout
            const { uid, email, displayName, photoURL } = user; //destrutue elements from user 
            dispath(login({ uid, email, displayName, photoURL })); //if exist user called login
            dispath(startLoadingNotes()); //start loading notes
        }); //funcion emited values when change state
        
    }, []);

    return status;
    /*
    return {  
        status,
    }*/
}
