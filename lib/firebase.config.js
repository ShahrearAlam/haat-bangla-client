// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_9c3oJLfN_Dpt7ECfzWQhFMdyx2SGKOM",
  authDomain: "react-push-notification-fbe7a.firebaseapp.com",
  projectId: "react-push-notification-fbe7a",
  storageBucket: "react-push-notification-fbe7a.appspot.com",
  messagingSenderId: "492971731630",
  appId: "1:492971731630:web:66610c270f5c96ba71db3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
