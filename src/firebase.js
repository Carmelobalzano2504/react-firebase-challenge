import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBvHBk0nOv-p_hm9rFlJ0PIXi_VIGYcyGo",
    authDomain: "react-challenge-ca011.firebaseapp.com",
    projectId: "react-challenge-ca011",
    storageBucket: "react-challenge-ca011.appspot.com",
    messagingSenderId: "1072824889898",
    appId: "1:1072824889898:web:fbfa0d337358d4de4f8953",
    measurementId: "G-BXGJ3QC6Q7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;