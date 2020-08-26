import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBoaCnovwk_2CxlTqyPZRYEwq111CDYFCk',
  authDomain: 'whats-app-clone-41089.firebaseapp.com',
  databaseURL: 'https://whats-app-clone-41089.firebaseio.com',
  projectId: 'whats-app-clone-41089',
  storageBucket: 'whats-app-clone-41089.appspot.com',
  messagingSenderId: '586437095283',
  appId: '1:586437095283:web:036d9b4422730188499f06',
  measurementId: 'G-907G68DPMT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
