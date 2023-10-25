import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2V0dOjXGV-eZ2zwIHNx6iT2XPko1BvCE",
  authDomain: "hello-dd0ef.firebaseapp.com",
  projectId: "hello-dd0ef",
  storageBucket: "hello-dd0ef.appspot.com",
  messagingSenderId: "1006127754583",
  appId: "1:1006127754583:web:32820752fe188f03f0e212",
  measurementId: "G-JD2D5JYHWX",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// Initialize Firebase
const db = app.firestore();
export { db, firebase };
