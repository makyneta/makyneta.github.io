// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_QOzxrcsqz5NTtomoiVjF4KcI4pLhx0k",
  authDomain: "tomasmotastudios-ba980.firebaseapp.com",
  projectId: "tomasmotastudios-ba980",
  storageBucket: "tomasmotastudios-ba980.firebasestorage.app",
  messagingSenderId: "2015311717",
  appId: "1:2015311717:web:98121ec7f698f74c5d138c",
  measurementId: "G-8V9J2ZFBL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);