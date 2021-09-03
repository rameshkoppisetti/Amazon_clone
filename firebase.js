import firebase from "firebase";
//console.log(firebase);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4e5DNG46bWf-imdvz7QM4Hzm_ezxS3so",
    authDomain: "project-45888.firebaseapp.com",
    projectId: "project-45888",
    storageBucket: "project-45888.appspot.com",
    messagingSenderId: "102055974494",
    appId: "1:102055974494:web:b77ad6633825a86ec886cf",
    measurementId: "G-4PVTE7DEKE",
};
const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();

export default db;