import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';



const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDPy-gThDBkB5b-s2aTAxEO-nPlhrAmvnY",

    authDomain: "tasky-taskmanagement.firebaseapp.com",
  
    databaseURL: "https://tasky-taskmanagement-default-rtdb.firebaseio.com",
  
    projectId: "tasky-taskmanagement",
  
    storageBucket: "tasky-taskmanagement.appspot.com",
  
    messagingSenderId: "362246032720",
  
    appId: "1:362246032720:web:53917bb8770f5181913055",
  
    measurementId: "G-VYTER4VJE3"
  
  
    
});

export {firebaseConfig as firebase };