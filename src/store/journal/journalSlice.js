import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,   //this is a band boolean
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
        
        addNewEmpetyNote: (state, action)=>{ //this funcion of action add a new note

        },
        setActiveNote: (state, action)=>{ //this function says if the note is active

        },
        setNotes: (state, action)=>{ //this function set all notes

        },
        setMessageSave: (state, action)=>{ //this function set the message of save


        },
        updateNote: (state, action)=>{ //this function update the note

        },
        deleteNoteById: (state, action)=>{ //this function delete the note

        }


    }
});
// Action creators are generated for each case reducer function
export const {
    addNewEmpetyNote,
    setActiveNote,
    setNotes,
    setMessageSave,
    updateNote,
    deleteNoteById
} = journalSlice.actions;