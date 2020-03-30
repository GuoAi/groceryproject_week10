import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDz8oeI5KTnY4dpe4cBeUf11g9tdPCIImY",
  authDomain: "bt3103-week9-d8ec0.firebaseapp.com",
  databaseURL: "https://bt3103-week9-d8ec0.firebaseio.com",
  projectId: "bt3103-week9-d8ec0",
  storageBucket: "bt3103-week9-d8ec0.appspot.com",
  messagingSenderId: "886879645959",
  appId: "1:886879645959:web:d9f527a94d11b03ad5d5a2",
  measurementId: "G-4QHHP6L11H"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
