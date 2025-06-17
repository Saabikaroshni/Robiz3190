import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5L_WjJCzvEeZvtge89KZ6cqquUshBhHw",
  authDomain: "robiz3190-fbff8.firebaseapp.com",
  projectId: "robiz3190-fbff8",
  storageBucket: "robiz3190-fbff8.firebasestorage.app",
  messagingSenderId: "336590421698",
  appId: "1:336590421698:web:11fe6ff59f922538d0855b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };