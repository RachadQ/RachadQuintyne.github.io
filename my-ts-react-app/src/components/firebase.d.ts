// firebase.ts
import firebase from "firebase/app";
import "firebase/auth";
import {doc,getDoc} from "firebase/firestore";
import firebaseConfig from "./firebase_setup/firebaseConfig";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export { firebase,doc,getDoc };
