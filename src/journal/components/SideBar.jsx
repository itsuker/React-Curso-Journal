import { Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SidebarItem } from './SidebarItem';
import { indexedDBLocalPersistence } from 'firebase/auth';

export const SideBar = ({ drawerWidth = 240,changeView,openSideState }) => {

    const { displayName } = useSelector(state => state.auth) //use selector get diplayname    store/auth/  all from journal carpetal
    const {notes} = useSelector(state => state.journal) //use selector get notes store/journal  all from journal carpetal
  //   console.log(notes);
  

  
    return (


        <Drawer
               // variant="persistent"
              //  variant='permanent'  //temporary permite  o permanent  permite desparecer
                open={openSideState}
                onClose={changeView}
                /**         
                 * 
                 * 
                 * 
                 */
                sx={{
                    display: {sm:'block'  },  
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

        <Box
            className='animate__animated animate__fadeInTopLeft  animate__medium'
            component='nav'                 //flexShrink no se encogera en menor sm
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            onClick={changeView}
        >

            {/*permite  abrir o crerra median click este elemento */}
            
                {/*Agrupador de elements */}
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'> {/*tipo de letra */}
                      {displayName}
                    </Typography>
                </Toolbar>
                <Divider />  {/*Eesto es como hr pero horizonal para dividir 2 parrafos */}

                <List  >
                    {           //index
                        notes.map((note ,index) => (     //sparcing note to current to destruturin in sidebarItem
                            
                            <SidebarItem key={ index } {...note}  />  //here pass elements that are relevant for sidebarItem
                           
                        ))
                        
                    }
                </List>
            
            

            </Box>
        </Drawer>
    );
};
