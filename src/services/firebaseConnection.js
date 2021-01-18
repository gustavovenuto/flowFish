import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyA6Ce7NQ-6GHLRvM1dlPkrzf2HXeL2MVeo",
  authDomain: "meuapp-fbb57.firebaseapp.com",
  databaseURL: "https://meuapp-fbb57.firebaseio.com",
  projectId: "meuapp-fbb57",
  storageBucket: "meuapp-fbb57.appspot.com",
  messagingSenderId: "275931892037",
  appId: "1:275931892037:web:e126f6c548f1f999afd62c",
  measurementId: "G-KC29FWVBF9"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase;