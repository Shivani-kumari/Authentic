import firebase from  'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBWpdXLzektesDfQp7qZV8bnjhaGcdA2-k",
    authDomain: "login-51725.firebaseapp.com",
    projectId: "login-51725",
    storageBucket: "login-51725.appspot.com",
    messagingSenderId: "695788021876",
    appId: "1:695788021876:web:92d2df9f669831ca8ec921",
    measurementId: "G-PC89T1EC25"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default  fire;