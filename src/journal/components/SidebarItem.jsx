import React, { useMemo } from 'react'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal/journalSlice';
import { useDispatch } from 'react-redux';
export const SidebarItem = ({title = '',body,id,date,imageUrls = []}) => {

    const dispatch = useDispatch();
   const newTitle=  useMemo(( ) =>{
        return title.length > 17 
        ? title.substring(0,17) + '...' //if title is longer than 17 characters show ... ,but not longer than show title
        : title;
    }, [title]);

    const onClickByidItem =  ()=>{
        dispatch(setActiveNote({  title, body,id,date,imageUrls})); //here pass a objet detructuring
    }


    return (

        //ListItem, ListItemButton, ListItemIcon, ListItemText

        <ListItem    disablePadding>
            <ListItemButton     
            onClick={onClickByidItem}>
                <ListItemIcon> {/*lista para iconos */}
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>{/*contenido */}
                    <ListItemText primary={newTitle} />
                    <ListItemText sx={{
                        fontSize: 1,
                        fontWeight: 'bold',


                    }}  secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
