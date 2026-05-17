import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAm_W4zaeeMaoF6BeXLa--Ep3_PXwjr7kg',
  authDomain: 'project-heist-kk.firebaseapp.com',
  projectId: 'project-heist-kk',
  storageBucket: 'project-heist-kk.firebasestorage.app',
  messagingSenderId: '418992676163',
  appId: '1:418992676163:web:109f812e70d0d5821d63f6',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
