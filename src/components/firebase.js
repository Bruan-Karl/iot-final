import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAVm9ou-cx684WS0Qi71L2puOOq9M00IK4",
    authDomain: "progress-nov-16.firebaseapp.com",
    databaseURL: "https://progress-nov-16-default-rtdb.firebaseio.com",
    projectId: "progress-nov-16",
    storageBucket: "progress-nov-16.appspot.com",
    messagingSenderId: "73399618219",
    appId: "1:73399618219:web:123fe2191ff70cc82bc5ee"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)



