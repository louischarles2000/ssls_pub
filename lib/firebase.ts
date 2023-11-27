// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU0lnoYOrzLaQeVF-QdmrCEodZJIcp3DM",
  authDomain: "constant-disk-406311.firebaseapp.com",
  projectId: "constant-disk-406311",
  storageBucket: "constant-disk-406311.appspot.com",
  messagingSenderId: "1001959807561",
  appId: "1:1001959807561:web:59db452cee7d79b6257d98",
  measurementId: "G-L2F84ZSXPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage();