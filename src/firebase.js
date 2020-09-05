import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCG8hsw-orXHbm9ZDC_B69gJVOnvarNTE",
  authDomain: "facebook-clone-e560f.firebaseapp.com",
  databaseURL: "https://facebook-clone-e560f.firebaseio.com",
  projectId: "facebook-clone-e560f",
  storageBucket: "facebook-clone-e560f.appspot.com",
  messagingSenderId: "606251677183",
  appId: "1:606251677183:web:085737865afb3e1f7b23ca",
  measurementId: "G-3CY6ZL1Y42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
