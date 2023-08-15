import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDo6FEOTn6NlAxtD2BLEemIbYCoJbMQNfs",
  authDomain: "react-f5efb.firebaseapp.com",
  projectId: "react-f5efb",
  storageBucket: "react-f5efb.appspot.com",
  messagingSenderId: "814142718312",
  appId: "1:814142718312:web:0ce3ee5699dab9cbfe56dd"
};



const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
