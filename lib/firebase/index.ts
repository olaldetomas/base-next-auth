import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const firestore = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

export { app, firestore as db };
