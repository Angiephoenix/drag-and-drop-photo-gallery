// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQNjCSr5MSoOdjsQD4kZTz5CPX6yhdT6M",
  authDomain: "react-auth-d07be.firebaseapp.com",
  projectId: "react-auth-d07be",
  storageBucket: "react-auth-d07be.appspot.com",
  messagingSenderId: "633721684033",
  appId: "1:633721684033:web:3f7b99df575ea06b9246c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

