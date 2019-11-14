import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCajsm4n3CDl0hlK3Tx7A9-ovxCB7AKJzo",
  authDomain: "song-spot-e31ef.firebaseapp.com",
  databaseURL: "https://song-spot-e31ef.firebaseio.com",
  projectId: "song-spot-e31ef",
  storageBucket: "song-spot-e31ef.appspot.com",
  messagingSenderId: "1043510911013",
  appId: "1:1043510911013:web:a4f29933a37efd13c71fcc",
  measurementId: "G-RC5JG4KHBP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
