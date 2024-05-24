import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';


const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box  sx={{ display: 'flex' }}>
      
         {/*Navbar drawerWidth  resive drawerWidth  al component*/}
        <NavBar drawerWidth={ drawerWidth } />
                {/*Sidebar drawerWidth resive drawerWidth  al component */}
        <SideBar drawerWidth={ drawerWidth } />

        <Box 
        
            component='main' //Esto es como la etiqueta main
            sx={{ flexGrow: 1, p: 3 }}  //esto lo aplica globalmente
        >
            {/*Toolbar  este toma el ancho y altura correspondiente al nav y side */}
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
