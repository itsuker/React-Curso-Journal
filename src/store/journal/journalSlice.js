import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,   //this is a band boolean
        messageSave: '',
        notes:[],
        active:null,
        
        //active:{
        //   id:ABC123,
        //  title:'',
        //   body:'',
        //   date:'123456',
        //   imageUrls: [], //https://foto1.jpg ,  //https://foto2.jpg
        // }
    
    },
    reducers: {
        
        savingNewNote: ( state)=>{
           //  state.active = action.payload; //
            state.isSaving = true; //band  the  note
        },
        
        
        addNewEmpetyNote: (state, action)=>{ //this funcion of action add a new note
            state.notes.push(action.payload); //add a new note to the note list
            state.isSaving = false; //band  the  note
        },
        setActiveNote: (state, action)=>{ //this function says if the note is active
            state.active = action.payload; //
            state.messageSave = '';
            
        },
        setNotes: (state, action)=>{ //this function set all notes 
            state.notes = action.payload; // = action.payload; //
            // state.notes = action.payload; //
            //state.notes = payload.state; //
        },
        setMessageSave: (state)=>{ //this function set the message of save
            state.isSaving = true; //band  the  note
            state.messageSave = '';
            //Todo:  Menssage  error
        },
        updateNote: (state, action)=>{ //this function update the note
            state.isSaving = false; //band the note
            state.notes = state.notes.map((note)=>{
                if(note.id === action.payload.id){
                    return action.payload; //if the note is equal to the  id return new note
                }
                return note;//but  if different from the note id return the same note
            });
            state.messageSave = `${action.payload.title},actulizada correctamente`;
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls , ...action.payload]; //here pass copy from actually photos and doing append to add more
            state.isSaving = false;
           // console.log(state.active.imageUrls);
            //imageUrls
        },
        //clear store redux for another people no see this information
        clearNotesLogout: (state)=>{
            state.isSaving = false;
            state.messageSave = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: (state, action)=>{ //this function delete the note
            state.active = null;
            //   state.notes = state.notes.filter(note => note.id !== action.payload);
            state.notes = state.notes.filter((note)=>{
                return note.id!== action.payload;
            });
          
            /*
            state.isSaving = false;
            state.messageSave = '';
            state.active = null;*/


        }


    }
});
// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmpetyNote,
    setActiveNote,
    setNotes,
    setMessageSave,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById
} = journalSlice.actions;