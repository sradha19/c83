import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAk1pB_sjCj2Il1AWln7m8UFW-OtB5AmI8",
  authDomain: "santa-ad667.firebaseapp.com",
  databaseURL: "https://santa-ad667.firebaseio.com",
  projectId: "santa-ad667",
  storageBucket: "santa-ad667.appspot.com",
  messagingSenderId: "8356058200",
  appId: "1:8356058200:web:debd56b07b195b57e6a62d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();