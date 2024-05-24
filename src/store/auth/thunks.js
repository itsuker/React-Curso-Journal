import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";
//autitication with email and password
export const checkingAuthentication = () => {

    
    return async (dispatch) => {
        dispatch(checkingCredentials()); //called action
    }
}


//autificaction with google auth    //called in LoginPage Component
export const starGoogleSignIn =  () => {

    return async (dispatch) => {
        dispatch(checkingCredentials()); //called action
        const result = await  singInWithGoogle();// call funcion for  autitization with google auth
       // console.log({result});
       if(!result.ok) return  dispatch(logout(result.errorMessage)); //return is finished ejecution 
       //delete result.ok is for eliminate variable yes not need
        dispatch(login(result));

    }

}
//this funcion called in RegisterPage component
export const startCretingUserWithEmailPassword = ({email, password,displayName}) =>{

    return async (dispatch) =>{
        dispatch(checkingCredentials()); //called action
        const result = await registerUserWithEmailPassword({ email, password, displayName });
       // console.log(result);

        if(!result.ok) return  dispatch(logout(result.errorMessage)); //return is finished ejecution 
        //delete result.ok is for eliminate variable yes not need
        dispatch(login(result));
    }
}


export const starLoginWithEmilPassword = ({email,password})=>{

    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email,password});
    //  console.log(result);
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
        
    }

}

export const startLogout = () => {
    return async (dispatch) => {
        // await logout();
        // 
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    }

}

