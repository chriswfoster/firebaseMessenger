import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_firebase_api_key,

  authDomain: process.env.REACT_APP_firebase_auth_domain,

  databaseURL: process.env.REACT_APP_firebase_database_url,

  projectId: process.env.REACT_APP_firebase_project_id,

  storageBucket: process.env.REACT_APP_firebase_storage_bucket,

  messagingSenderId: process.env.REACT_APP_firebase_messaging_sender_id,

  appId: process.env.REACT_APP_firebase_app_id

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);