// firebase.d.ts
import {initializeApp} from "firebase/app";
import "firebase/auth";
import {collection,getDocs,getFirestore} from "firebase/firestore";
import firebaseConfig from "./firebase_setup/firebaseConfig";


// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db,collection,getDocs };
