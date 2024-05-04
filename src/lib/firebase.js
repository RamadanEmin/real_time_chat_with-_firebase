import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: 'reactchat-d846f.firebaseapp.com',
    projectId: 'reactchat-d846f',
    storageBucket: 'reactchat-d846f.appspot.com',
    messagingSenderId: '393034306270',
    appId: '1:393034306270:web:e33870c5a7a00085d2a84f'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();