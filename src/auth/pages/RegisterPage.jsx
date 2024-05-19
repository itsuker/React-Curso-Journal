import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCretingUserWithEmailPassword } from '../../store/auth';



export const RegisterPage = () => {

  const dispath = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false); //this formSubmitted called when the form is submitted
  const { status,errorMessage} =  useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(()=>status === 'checking' , [status]);

  const formData = {
    email: '',
    password: '',
    displayName: '',

  }

  const formValidations = {
      email: [   ( value) => value.includes('@')  ,'the email must have @'], //the email must have @
      password: [   ( value) => value.length >= 6  ,'The password must be at least 6 characters'] , 
      displayName: [   ( value) => value.length >= 1  ,'The name is required '] , //name must be at 1 caracter
  }


  const { formState,displayName ,email, password, onInputChange,
          isFormValid,displayNameValid,emailValid,passwordValid  //this elements  are of formValidations
   } = useForm(formData ,formValidations) //use customHooks here pass formValidations at  custom hook
    
  //console.log(displayNameValid); //


  
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);//this element actived if all inputs are in  '' or no contened information
    if(!isFormValid) return; //if form is valid, return
    //console.log(formState);
    dispath(startCretingUserWithEmailPassword(formState)); //called action of thunks and passed formState ,with all the data
   // console.log({displayName,email,password});
  } 


  return (
    <AuthLayout title="Crear cuenta">
      
      {/* <h1>formValid {isFormValid ? 'correct' : 'incorrect'}</h1>*/}
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name='displayName'
                value={displayName} 
                onChange={onInputChange} 
                //when using !! conviert in boolean
                error = {!!displayNameValid  && formSubmitted  }  //yes error dont`t have value is considered with true value
                helperText={displayNameValid  } //   }
              
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'  //email equal name and value
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            
            
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            

            {/**   
             * 
                                   */}

            <Grid item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
            <Alert severity='error'>{errorMessage} </Alert>
            </Grid>  

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication} //this is checked status
                variant='contained'
                type='submit'
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login"
              sx={{
                textDecoration: 'none', cursor: 'pointer',
                '&:hover': {
                  color: 'purple'
                }
              }}
            >
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form> {/*finished form */}

    </AuthLayout> //fineshed component Authlayout
  )
}
