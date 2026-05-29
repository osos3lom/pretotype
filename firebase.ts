import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "fursanpreto.firebaseapp.com",
  projectId: "fursanpreto",
  storageBucket: "fursanpreto.appspot.com",
  messagingSenderId: "1029286205184",
  appId: "1:1029286205184:web:fea8ba7fb92f354615c5e5",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app);
