import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAzg13E31GMNHtGUmcxu19mcoH2irYFGzk",
    authDomain: "react-auth-95118.firebaseapp.com",
    projectId: "react-auth-95118",
    storageBucket: "react-auth-95118.appspot.com",
    messagingSenderId: "394543690018",
    appId: "1:394543690018:web:33695e14a57c543bd7f57b",
    measurementId: "G-BKN2FZMBFK"
  });

  export default firebaseConfig;