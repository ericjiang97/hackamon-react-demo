import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/datastore";
import firebaseAdmin from "firebase-admin";
// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyDDM3eliXkr2cWmXCfaP0Wc7Nrgea9GEFw",
  databaseURL: "https:/hackamon-demo-2018.firebaseio.com",
  projectId: "hackamon-demo-2018"
};
export const firebase = firebase.initializeApp(config);

export const firebaseAdmin = firebaseAdmin.initializeApp(config);
