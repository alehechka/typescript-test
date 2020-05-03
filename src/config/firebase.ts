import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdN0BxLf4iYNwYzwvqOgHch2QNNHyrvjs",
  authDomain: "yt-react-redux-app.firebaseapp.com",
  databaseURL: "https://yt-react-redux-app.firebaseio.com",
  projectId: "yt-react-redux-app",
  storageBucket: "yt-react-redux-app.appspot.com",
  messagingSenderId: "881279966574",
  appId: "1:881279966574:web:8a35962da4c411e69c357f",
};

const firebaseConfig_dev = {
  apiKey: "AIzaSyBxrtuaG2KspaLvF6itDfb_GNsxIPzeYiQ",
  authDomain: "yt-react-redux-dev.firebaseapp.com",
  databaseURL: "https://yt-react-redux-dev.firebaseio.com",
  projectId: "yt-react-redux-dev",
  storageBucket: "yt-react-redux-dev.appspot.com",
  messagingSenderId: "79591799435",
  appId: "1:79591799435:web:be7281c2d7858d38a2f28e",
  measurementId: "G-39KFCZKZ9Z"
};

firebase.initializeApp(process.env.NODE_ENV === "production" ? firebaseConfig : firebaseConfig_dev);
firebase.firestore().settings({});

firebase.firestore().enablePersistence()
  .catch(function(err: any) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully
  

export default firebase;
