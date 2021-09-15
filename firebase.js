import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjNpj4j0brOF1SIW9kLo85_V8HMuRje5g",
  authDomain: "fir-5ac3a.firebaseapp.com",
  projectId: "fir-5ac3a",
  storageBucket: "fir-5ac3a.appspot.com",
  messagingSenderId: "95508128001",
  appId: "1:95508128001:web:3b5d8d164e5634876f3b00",
  measurementId: "G-46WFZYDHSF"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
