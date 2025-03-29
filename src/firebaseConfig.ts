// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Analytics can be added if needed

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr3k3DjPk8fNlgapY3Gge4ngXXuRifDjA", // IMPORTANT: Consider using environment variables for API keys
  authDomain: "tiger3homs-f3a5f.firebaseapp.com",
  projectId: "tiger3homs-f3a5f",
  storageBucket: "tiger3homs-f3a5f.firebasestorage.app",
  messagingSenderId: "565046427467",
  appId: "1:565046427467:web:7188f79739eaa50473f2ce",
  measurementId: "G-Z4TSDCDD4R" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics if needed
// export const analytics = getAnalytics(app);

// You might initialize other Firebase services here (Firestore, Storage, etc.)

export default app; // Export the initialized app if needed elsewhere
