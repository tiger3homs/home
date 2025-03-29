import { initializeApp, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsGrtbRSjz77iShv4tB0vQ33A23ie9JM8",
  authDomain: "tiger3homs-f3a5f-d60da.firebaseapp.com",
  projectId: "tiger3homs-f3a5f-d60da",
  storageBucket: "tiger3homs-f3a5f-d60da.firebasestorage.app",
  messagingSenderId: "509990310606",
  appId: "1:509990310606:web:e36d91ea748c4cd64d369f",
  measurementId: "G-DDZTZ6MR6S"
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
