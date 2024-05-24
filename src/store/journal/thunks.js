import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmpetyNote, deleteNoteById, savingNewNote, setActiveNote, setMessageSave, setNotes, setPhotosToActiveNote, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNota = () =>{

    return async (dispatch,getState) => { //called segund argument for  get los date del users
        
        //Todo: homework dispath
        dispatch(savingNewNote());
        //auth is for search this area
        const { uid } = getState().auth; //destruturing getState().auth for get los date del users

        //console.log(uid);

      //  console.log('starNewNota');
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(), //gives the date of the new note
            imageUrls: [], //
        }
        const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`)); //rute save the notes
        await setDoc(newDoc, newNote);//here send the new note  and router to the database

        //  const setDocResp =   await setDoc(newDoc,newNote);
        // console.log({newDoc,setDocResp});
        newNote.id = newDoc.id //here creating id a the new note

        //called actions from journalSlice and passed newWnote argument
        dispatch(addNewEmpetyNote(newNote))
        dispatch(setActiveNote(newNote));
      

    }
}

export const startLoadingNotes = ()=>{

    return async( dispatch,getState )=>{
        const { uid } = getState().auth; //destruturing getState().auth for get los date del users
        if(!uid) throw new Error(' the uid from the user is not exist')
       //console.log(uid);
        const Notes = await  loadNotes(uid); //here called loadnotes from helpers
       // console.log(loadNotes(uid));
        dispatch(setNotes(Notes));
        
    }
    
    
}

export const startSaveNote = () =>{

    return async (dispatch,getState)=>{
        
     
        dispatch(setMessageSave());
        const { uid } = getState().auth; //destruturing getState().auth to get los date del users
        const { active: note } = getState().journal; //destruturing getState().journal to get the date from users and rename note
        const noteToFireStore = { ...note }; //take copy of note  to send to firestore
         delete noteToFireStore.id; // this part avoid creating a new note with the id and deleted erase id  for avoid this problem
        //console.log(noteToFireStore); 
        const docRef = doc(FirebaseDb , `${uid}/journal/notes/${note.id}`); //rute the firebase in db
        await setDoc(docRef,noteToFireStore, {merge:true});//this merge is simple a  union with camps existing or not
        dispatch(updateNote(note));
       

    }
}

export const starUpLoadingFiles = (files = []) =>{
    return async (dispath) => {
        dispath(setMessageSave());
        //console.log(files);
        //  await fileUpload(files[0]);
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file)); //here insert  the file in array of promises
        }
      const photosUrls =   await Promise.all(fileUploadPromises); //here creating the promises all
    //  console.log(photosUrls);
      dispath(setPhotosToActiveNote(photosUrls)); //here insert the file in array of promises
     
    }

}

export const startDeleteNotes =()=>{
    //const docRef = doc(FirebaseDb , `${uid}/journal/notes/${note.id}`); //rute the firebase in db
    return async(dispath,getState)=>{
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const docRef = doc(FirebaseDb,`${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispath(deleteNoteById(note.id));
       // console.log({uid,note});
    }
}