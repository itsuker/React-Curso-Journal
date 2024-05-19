import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //checking  //not-authenticated , 'authenticated '
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;//no need error for is good login
            
        },
        logout: (state,{payload} ) => { //{message}
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload; //

        },
        checkingCredentials: (state) => { //autificacion para async ,esto va servir posteo , bloquear botones
            state.status = 'checking';
        }
    }
});
// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials } = authSlice.actions; //funciones disparadas para los reducers