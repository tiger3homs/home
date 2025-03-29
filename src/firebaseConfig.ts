// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr3k3DjPk8fNlgapY3Gge4ngXXuRifDjA",
  authDomain: "tiger3homs-f3a5f.firebaseapp.com",
  projectId: "tiger3homs-f3a5f",
  storageBucket: "tiger3homs-f3a5f.firebasestorage.app",
  messagingSenderId: "565046427467",
  appId: "1:565046427467:web:7188f79739eaa50473f2ce",
  measurementId: "G-Z4TSDCDD4R"
};

// Initialize Firebase only if we're in a browser environment
let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Provide fallback values
  app = null;
  auth = null;
}

export { auth };
export default app;