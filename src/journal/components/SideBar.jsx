import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth)
    return (
        <Box
            className='animate__animated animate__fadeInTopLeft  animate__medium'
            component='nav'                 //flexShrink no se encogera en menor sm
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            {/*permite  abrir o crerra median click este elemento */}
            <Drawer
                variant='permanent'  //temporary permite  o permanent  permite desparecer
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {/*Agrupador de elements */}
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'> {/*tipo de letra */}
                      {displayName}
                    </Typography>
                </Toolbar>
                <Divider />  {/*Eesto es como hr pero horizonal para dividir 2 parrafos */}

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon> {/*lista para iconos */}
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>{/*contenido */}
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Exercitation cillum irure elit consectetur.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
