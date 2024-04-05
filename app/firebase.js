// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOm72m_SBevaRW8M6Z3wv4xK044L8oBW4",
    authDomain: "testapp-642a6.firebaseapp.com",
    projectId: "testapp-642a6",
    storageBucket: "testapp-642a6.appspot.com",
    messagingSenderId: "617107167073",
    appId: "1:617107167073:web:45e43fa640ecded9fe1720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app, "gs://testapp-642a6.appspot.com");