// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔐 ใช้ config ของคุณเองจาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCdGdxjF1j-npoznW3KXZNXfDI19P43NQk",
  authDomain: "projectcsc350.firebaseapp.com",
  projectId: "projectcsc350",
  storageBucket: "projectcsc350.firebasestorage.app",
  messagingSenderId: "569242883334",
  appId: "1:569242883334:web:a59fc36a8827d4960b7a87",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
