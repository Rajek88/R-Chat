// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASEGJBCoJEtqIBPH9MePzE9VzdEJgJLkM',
  authDomain: 'r-chat-27c43.firebaseapp.com',
  databaseUrl:
    'https://r-chat-27c43-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'r-chat-27c43',
  storageBucket: 'r-chat-27c43.appspot.com',
  messagingSenderId: '265804037698',
  appId: '1:265804037698:web:97200706e04d2d76a977db',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// for version nine
export const auth = getAuth(app);
export const database = getDatabase(app);
