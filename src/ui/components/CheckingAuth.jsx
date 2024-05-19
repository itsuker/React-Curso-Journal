import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {

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
               // className='box-shadow'
               // xs={3}// tamaño pantalla móvil
                //md={6} // tamaño pantalla tablet
                // lg={8} // tamaño pantalla escritorio
                // md={6}
                // lg={6}
                sx={{
                  //  width: { xs: 350, sm: 400, md: 550 },
                    direction: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                   //  backgroundColor: 'white',
                   // padding: 3,
                   // borderRadius: 2

                }}>
                <CircularProgress color='warning'></CircularProgress>
            </Grid>
        </Grid>
    )
}
