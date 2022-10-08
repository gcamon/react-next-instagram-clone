// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpsAs6Qrbq3ahXdnRhkPQZK0v2FMw6yI",
  authDomain: "instagram2-b007b.firebaseapp.com",
  projectId: "instagram2-b007b",
  storageBucket: "instagram2-b007b.appspot.com",
  messagingSenderId: "778860217131",
  appId: "1:778860217131:web:ca5d3b9e1e713ce971fb6e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage}