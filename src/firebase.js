import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBsk5Fkhmzefzr7B6vNKBBvO8dzhNCyAXk',
  authDomain: 'instagram-clone-c6def.firebaseapp.com',
  databaseURL: 'https://instagram-clone-c6def.firebaseio.com',
  projectId: 'instagram-clone-c6def',
  storageBucket: 'instagram-clone-c6def.appspot.com',
  messagingSenderId: '97051404753',
  appId: '1:97051404753:web:8382caa12f0368651158f0',
  measurementId: 'G-Q031RX2PSD',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
