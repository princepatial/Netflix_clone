import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

import { addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCOU4qBEamo90MNg1Y4GkNZzncEjkYrkHY",
  authDomain: "netflix-clone-db63f.firebaseapp.com",
  projectId: "netflix-clone-db63f",
  storageBucket: "netflix-clone-db63f.appspot.com",
  messagingSenderId: "730759579070",
  appId: "1:730759579070:web:308c690d382d37bedfa5ef"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async(name, email,password) => {

    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user;

       await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/') [1].slit('-').join(" "));
    }


}

const login =  async ( email,password) => {

    try {
       await signInWithEmailAndPassword(auth,  email,password)
    } catch (error) {

        console.log(error);
        toast.error(error.code.split('/') [1].split('-').join(" "));

    }


}

const logout = () => {
    signOut(auth);
}

export {auth, db, login,signup,logout};