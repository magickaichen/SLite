import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB1pv6G7jokEwVn2dKM08dhYqVOr0DRkME",
  authDomain: "react-slack-clone-f1bc4.firebaseapp.com",
  databaseURL: "https://react-slack-clone-f1bc4.firebaseio.com",
  projectId: "react-slack-clone-f1bc4",
  storageBucket: "react-slack-clone-f1bc4.appspot.com",
  messagingSenderId: "554689318560"
};
firebase.initializeApp(config);

export default firebase;