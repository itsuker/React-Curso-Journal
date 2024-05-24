import { useState } from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import { SideBar } from './SideBar';



export const NavBar = ({ drawerWidth = 240 }) => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const dispath = useDispatch();

    const onLogout = () => {
        dispath(startLogout());
       // console.log('logout');
    }
    const changeSidebar= () =>{
        //console.log('change sidebar');
        setOpenSidebar(!openSidebar);
    }


    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` }, //esto es menos el ancho de las props
                ml: { sm: `${drawerWidth}px` }
            }}
        >
        <Toolbar>
            <IconButton
                onClick={changeSidebar}
                color='inherit' //hereda elementos
                edge="start" //posicion
                sx={{ mr: 2/*, display: { sm: 'none' }*/ }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <IconButton 
                color='error'
                onClick={onLogout}
                
                > {/*color del boton y aplica hover */}
                    <LogoutOutlined /> {/* icono de salir  */}
                </IconButton>
            </Grid>
            <SideBar  changeView={changeSidebar} openSideState={openSidebar}></SideBar> 
            
        </Toolbar>
      
        </AppBar>
    )
}
