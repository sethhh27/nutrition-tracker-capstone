import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX2yz-NBAqUO4JweBR6xdoI0ub17lql7M",
  authDomain: "capstone-nutrition-tracker.firebaseapp.com",
  projectId: "capstone-nutrition-tracker",
  storageBucket: "capstone-nutrition-tracker.firebasestorage.app",
  messagingSenderId: "82740880711",
  appId: "1:82740880711:web:c992c921bb766bd5791862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export default app;
