import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';



const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCpqGHWROfT1o6rorWOYtLRTwlNSE5xiNw",

    authDomain: "tasky-taskmanagement-23a9a.firebaseapp.com",

    projectId: "tasky-taskmanagement-23a9a",

    storageBucket: "tasky-taskmanagement-23a9a.appspot.com",

    messagingSenderId: "995087962442",

    appId: "1:995087962442:web:a461e6a2438ef9ab1a31b3"
  
  
  
    
});

export {firebaseConfig as firebase };