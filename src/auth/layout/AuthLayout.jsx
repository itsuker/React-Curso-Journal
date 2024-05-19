import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid item
        className='box-shadow'
        xs={3}// tamaño pantalla móvil
        //md={6} // tamaño pantalla tablet
        // lg={8} // tamaño pantalla escritorio
        // md={6}
        // lg={6}
        sx={{
          width: { xs: 350, sm: 400, md: 550 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}>

        <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>


        {children}  {/*children los hijos de este layout layer */}

      </Grid>

    </Grid>

  )
}
