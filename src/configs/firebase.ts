import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default firebase;
