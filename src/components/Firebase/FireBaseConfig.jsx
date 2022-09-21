
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAk3ezdMCQ-rFOoQVlatOsjnICMt80Q770",
  authDomain: "nftproyect-e5a74.firebaseapp.com",
  projectId: "nftproyect-e5a74",
  storageBucket: "nftproyect-e5a74.appspot.com",
  messagingSenderId: "62927739625",
  appId: "1:62927739625:web:72c5c4176af7bc6da32e78"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);