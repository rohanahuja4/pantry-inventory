// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WSdPecnjcdm1btn2lGUVIeneVy7iYnM",
  authDomain: "inventory-management-app-eaa1c.firebaseapp.com",
  projectId: "inventory-management-app-eaa1c",
  storageBucket: "inventory-management-app-eaa1c.appspot.com",
  messagingSenderId: "696016747507",
  appId: "1:696016747507:web:0ba15905af474e6482b086",
  measurementId: "G-VKM3C9J7Q4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };