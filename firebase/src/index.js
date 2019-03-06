import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKSXgJQ82uoyZaHuT3JGVXyYpU_A8KqAo",
    authDomain: "info340a-wi19-demo.firebaseapp.com",
    databaseURL: "https://info340a-wi19-demo.firebaseio.com",
    projectId: "info340a-wi19-demo",
    storageBucket: "info340a-wi19-demo.appspot.com",
    messagingSenderId: "31096127367"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));