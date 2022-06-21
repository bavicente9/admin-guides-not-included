import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, EmailAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVZCdMoso7Asml-6aI8rgO064p2-KQ53g",
  authDomain: "guides-not-included.firebaseapp.com",
  databaseURL: "https://guides-not-included-default-rtdb.firebaseio.com",
  projectId: "guides-not-included",
  storageBucket: "guides-not-included.appspot.com",
  messagingSenderId: "419253823636",
  appId: "1:419253823636:web:4eaf263365e0f19aa0ac81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new EmailAuthProvider();

