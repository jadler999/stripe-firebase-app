// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD18gj5ArCzqX0_JLygNcjtCzw_p-ap-pY',
  authDomain: 'study-buddy-80e7b.firebaseapp.com',
  projectId: 'study-buddy-80e7b',
  storageBucket: 'study-buddy-80e7b.appspot.com',
  messagingSenderId: '430772772425',
  appId: '1:430772772425:web:1642b3c5cf076bd9726998',
  measurementId: 'G-MLNG90BY0Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
