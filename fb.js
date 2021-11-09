const firebaseConfig = {
    apiKey: "AIzaSyD721Z5SLW5uYUGzNnpAkHbi5_YztNDPKc",
    authDomain: "bullseye-40a97.firebaseapp.com",
    projectId: "bullseye-40a97",
    storageBucket: "bullseye-40a97.appspot.com",
    messagingSenderId: "247692196057",
    appId: "1:247692196057:web:f08e526d3e9ade82cd26c8"
  };
  
// Inicializa Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


