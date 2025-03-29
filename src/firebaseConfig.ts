import { initializeApp, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr3k3DjPk8fNlgapY3Gge4ngXXuRifDjA",
  authDomain: "tiger3homs-f3a5f.firebaseapp.com",
  projectId: "tiger3homs-f3a5f",
  storageBucket: "tiger3homs-f3a5f.firebasestorage.app",
  messagingSenderId: "565046427467",
  appId: "1:565046427467:web:7188f79739eaa50473f2ce",
  measurementId: "G-Z4TSDCDD4R"
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { auth };
export default app;