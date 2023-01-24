// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX01_hRgCKRXJXv33F960-NN7O2D-wyEc",
  authDomain: "my-stories-63aed.firebaseapp.com",
  projectId: "my-stories-63aed",
  storageBucket: "my-stories-63aed.appspot.com",
  messagingSenderId: "1089824045419",
  appId: "1:1089824045419:web:c5db43bf5094239a93342e",
  measurementId: "G-PDLFGKJEXP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }