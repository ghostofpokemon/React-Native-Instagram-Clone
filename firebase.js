import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'ENTER YOUR API KEY',
  authDomain: 'FIREBASE',
  projectId: 'INFO',
  storageBucket: 'GOES',
  messagingSenderId: 'HERE',
  appId: 'YOU CAN DO IT',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
export {firebase, db};
