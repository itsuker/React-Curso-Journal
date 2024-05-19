
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';


import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

 // const{status} = useCheckAuth(); //here used a custum hook
  const status = useCheckAuth(); //here used a custum hook

    if(status === 'checking'){ 
      return <CheckingAuth></CheckingAuth> //called compenent reload effect animation
    }
  return (
    <Routes>
        { 
        (status === 'authenticated') //if the user is authenticated only this routes exists
          //Route JournalApp Page
          ? <Route path="/*" element={<JournalRoutes />} />
            //Route of Login and Register Pages
          : <Route path="/auth/*" element={<AuthRoutes />} /> //But , if the user is not authenticated only  this routes exists
        }

        <Route path="/*" element={<Navigate to='/auth/login'></Navigate>}></Route> {/*This route only can navigate if the user be authenticated */}
        
      {/*
        
        Login y Registro 
        <Route path="/auth/*" element={ <AuthRoutes /> } />

          JournalApp 
        <Route path="/*" element={ <JournalRoutes /> } />
        
        
        */}



    </Routes>
  )
}
