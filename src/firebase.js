import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Імпорт для Firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN75Ady5MmaRKNW-UfTeTt5hOZ2mWmzHM",
  authDomain: "skylar-tattoo.firebaseapp.com",
  databaseURL: "https://skylar-tattoo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skylar-tattoo",
  storageBucket: "skylar-tattoo.firebasestorage.app",
  messagingSenderId: "157268729199",
  appId: "1:157268729199:web:6e2f579c59ecb64e8a9c9a",
  measurementId: "G-XKD1XR72X8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Ініціалізація Firestore
console.log("Firebase initialized, db:", db);
export const storage = getStorage(app);

export { db };
