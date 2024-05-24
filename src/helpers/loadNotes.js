import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDb } from "../firebase/config";

export const loadNotes = async (uid ='') => {
    if(!uid) throw new Error('The uid parameter is required');
    const collectionRef = collection(FirebaseDb, `${uid}/journal/notes`); //called FirebaseDb and rute from firebase
    const {docs}  = await getDocs(collectionRef); //takes a collection reference  of the router collectionReef
    //console.log(docs);
    //const notes = []; //create un array of notes



    
     return docs.map(doc => ({ id: doc.id,...doc.data() })); //return un array of notes is a version short
    

   //  return  docs.map(doc => ({ id: doc.id,...doc.data() })); //return the array of notes
    /*
    docs.forEach( doc => {
        //console.log(doc.id, '=>', doc.data());
       // console.log(doc.data());
        notes.push({ //add notes to id of the notes and takes  a copy doc.data one time for adding notes
            id: doc.id,
            ...doc.data()
        });
        console.log(notes);
        return notes; //return the array of notes
    })*/

}

