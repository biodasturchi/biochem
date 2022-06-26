import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3U4sFSbkWNHRHkxwc19Zq2GEUM3X1KgU",
  authDomain: "biochem-e50ce.firebaseapp.com",
  projectId: "biochem-e50ce",
  storageBucket: "biochem-e50ce.appspot.com",
  messagingSenderId: "905648792210",
  appId: "1:905648792210:web:af69fc4467fa1101057c4b",
  measurementId: "G-EQ7M6NNSW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
