import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { checkingAuthentication, starGoogleSignIn, starLoginWithEmilPassword } from '../../store/auth'; 


const formData = {
  email: '',
  password: '',
}


export const LoginPage = () => {
  
  
  const { status,errorMessage } = useSelector(state => state.auth); //with using selector taking elements of authSlice
  const [showErrorMessage, setShowErrorMessage] = useState(!!errorMessage); // Add a new state variable to control the visibility of the Alert
  const dispath = useDispatch(); //use dispath  for user actions


  /*
  useEffect(() => {
   if(errorMessage) {
     setShowErrorMessage(true);
     setTimeout(() => {
       setShowErrorMessage(false);
     }, 3000);
    
   }
  
   
  }, [errorMessage])*/



  const { email, password, onInputChange } = useForm(formData ); //use customHooks here)


  const isAuthenticated = useMemo(() => status === 'checking', [status]); //yes equal to 'checking' no changed ,but is different changed buttons 

  const onSubmit = (event) => {
    event.preventDefault();
    //esta no es la accion
    //console.log({ email, password });
    dispath(starLoginWithEmilPassword ( {email,password}));
    //dispath(checkingAuthentication());//called dispatch action to thunks
  }

  const onGoogleSignIn = () => {
    //console.log('onGoogleSignIn');
    dispath(starGoogleSignIn());//called dispatch action to thunks with
  }





  return (
    <AuthLayout title="Login"> {/*componente padre resie el title */}
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster' > {/*call funcion onSubmit for print information */}
        <Grid container>
          {/*tamano pantalla xs y sx styles */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email' //email is required
              value={email} // email has to be name = 'email' and value = 'email'
              onChange={onInputChange}

            />
          </Grid>
          {/*size screen movils xs y sx styles */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm ={12} display={errorMessage ? '' : 'none'}>
            
            <Alert severity='error'> {errorMessage}</Alert> {/*this messange  informated that  the password or email not valid*/}
            </Grid>

            <Grid item xs={12} sm={6}> {/*size screen very small and small */}
              <Button
                disabled={isAuthenticated}
                variant='contained'
                type='submit'
                fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained'
                disabled={isAuthenticated}
                onClick={onGoogleSignIn}
                fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography> {/*text */}
              </Button>
            </Grid>
          </Grid>

          {/*direccion row  */}
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>


      </form>

    </AuthLayout>
  )
}
