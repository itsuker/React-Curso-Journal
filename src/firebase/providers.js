import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider =  new  GoogleAuthProvider();

//call sinInWithGoogle in thunks
export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth,googleProvider); //import googleAuthprovider
      // const credentials = GoogleAuthProvider.credentialFromResult(result); //call googleAuthProvider.credentials
         const { displayName ,email,photoURL ,uid} = result.user;
        // console.log({user});

        return {
            ok :true,
            displayName,
            email,
            photoURL,
            uid,
           // token : result.credential.accessToken,
        }

        
    } catch (error) {
        console.log(error); //if exist error show in console.log
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok:false,
            errorMessage,
        }

    }

}

export const registerUserWithEmailPassword = async ({ email, password ,displayName }) =>{

    try {
        const result =  await  createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL} = result.user;
      //  console.log(result);
        //update user in Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok:true, //return values
            uid,
            photoURL,
            displayName,
        }

    } catch (error) {
      //  console.log(error);
        return {ok:false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async ({ email, password }) =>{

    try {
         //signInWithEmailAndPassword
         //signInWithEmailAndPassword
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
     //   console.log(result);
        const {uid,photoURL,displayName} = result.user;

        return {
            ok:true,
            uid,
            photoURL,
            displayName,
    
        }
    } catch (error) {
        console.log(error);
        return {ok:false , errorMessage:'Password or email is not valid'}
    }

}

//this funcion closse all sesions and this functions not return nothing
export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();
}