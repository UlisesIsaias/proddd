import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAzI6VzO0SLEN1AGdF3ZQN3Xa-C1ldYaP4",
  authDomain: "brink2-u.firebaseapp.com",
  projectId: "brink2-u",
  storageBucket: "brink2-u.firebasestorage.app",
  messagingSenderId: "140345219294",
  appId: "1:140345219294:web:a31ca4b83140bc9bc4ca4f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };