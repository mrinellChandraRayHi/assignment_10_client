// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZZHWh7Ac6PT7UT69ji2C6GeI4vIWOd2o",
    authDomain: "assignment-10-client-fa5f7.firebaseapp.com",
    projectId: "assignment-10-client-fa5f7",
    storageBucket: "assignment-10-client-fa5f7.appspot.com",
    messagingSenderId: "23010437821",
    appId: "1:23010437821:web:6b6984726491e445f8e5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);