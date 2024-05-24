import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import { starUpLoadingFiles, startDeleteNotes, startSaveNote } from '../../store/journal/thunks';



export const NoteView = () => {

    const dispatch = useDispatch();
    const {active:noteActive ,messageSave, isSaving} = useSelector( state => state.journal)
    const { title,body,onInputChange,formState,date} = useForm(noteActive ); //destructurin form elements of noteActive 

    const dateString =  useMemo(() => {
    const newDate = new Date(date); //
    return newDate.toUTCString();//return date location  in your ubications

  }, [date]);


  const fileInputRef = useRef();



  //this effect control activation of the activity note
  useEffect(() => {
    dispatch(setActiveNote(formState));
    
  }, [formState]);

  useEffect(() => { //with the using effect control activation  saving alert message
    if(messageSave.length > 0) {
        Swal.fire('Note updated',messageSave,'success')
    }
  }, [messageSave])
  
  //this funcion save the note
  const onSaveNote = ()=>{
    dispatch(startSaveNote());
  }

  const onInputChangeFile = ({target})=>{
    //console.log(target.files);
    if(target.files === 0)return;
    console.log('Subiedo fles')
    dispatch(starUpLoadingFiles(target.files));
    //dispatch(StarUpLoadingFiles(target.files));
  }
  
  const onDelete = ()=>{
    dispatch(startDeleteNotes())
  }

  return (
    //box es como div y grid es como cuadricula
    <Grid 
    className='animate__animated animate__fadeIn animate__faster'
    container
    direction='row' 
    justifyContent='space-between'
    alignItems='center'
    sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 30 } fontWeight='light' >{dateString}</Typography>
        </Grid>
        <Grid item>
          <input type='file'
          ref={fileInputRef}//with this element 
          multiple
          onChange={onInputChangeFile}
          style={{display:'none'}}
          >
          </input>
          
          <IconButton
           color='primary'
           disabled={isSaving}
           onClick={()=>fileInputRef.current.click()} //this callback simulate the click event
          >
            <UploadOutlined/>
           
          </IconButton>

            <Button 
            disabled={ isSaving }
            color="primary" 
            onClick={onSaveNote} 
            sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        <Grid 
        container justifyContent='end'>
            <Button
            onClick={onDelete}
            sx={{mt:2}}
            color='error'
            >
              <DeleteOutline />
              Borrar
            </Button>
        </Grid>

        {/* Image gallery */}
        <ImageGallery  images={noteActive.imageUrls}  />

    </Grid>
  )
}
