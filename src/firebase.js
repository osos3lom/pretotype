
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "fursanpreto.firebaseapp.com",
  projectId: "fursanpreto",
  storageBucket: "fursanpreto.appspot.com",
  messagingSenderId: "1029286205184",
  appId: "1:1029286205184:web:fea8ba7fb92f354615c5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);