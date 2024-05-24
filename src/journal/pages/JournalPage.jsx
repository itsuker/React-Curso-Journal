import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNota } from '../../store/journal/thunks';

export const JournalPage = () => {

   const dispatch = useDispatch();
  const {isSaving,active} = useSelector(state => state.journal); //take isSaving when using useSelector

  const onclickNewnote = () => {
    dispatch(startNewNota());
  }


  return (
    <JournalLayout>
      {/*Evaluate if existe note active show  and hide the another note */}
      {(!!active)  ? <NoteView />     : <NothingSelectedView /> } 
      {/* <Typography>Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate duis laboris. Esse esse consectetur ullamco excepteur ullamco amet. Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco ipsum do adipisicing irure.</Typography> */}
    
    {/* <NothingSelectedView />*/}
     
      {/* <NoteView /> */}


      <IconButton
        size='large'
        disabled={isSaving}
        onClick={onclickNewnote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
