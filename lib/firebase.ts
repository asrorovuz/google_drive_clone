
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-clone-88837.firebaseapp.com",
  projectId: "drive-clone-88837",
  storageBucket: "drive-clone-88837.appspot.com",
  messagingSenderId: "68021177561",
  appId: "1:68021177561:web:52cb8cc02ff9c0d67682c8",
  measurementId: "G-29J1XPQ7MW"
};

initializeApp(firebaseConfig);
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export {db}