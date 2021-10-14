
import firebase from 'firebase/compat/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
console.log("THE PROCESS : ", process.env)


const firebaseConfig = {

  apiKey: process.env.REACT_APP_firebase_api_key,

  authDomain: process.env.REACT_APP_firebase_auth_domain,

  databaseURL: process.env.REACT_APP_firebase_database_url,

  projectId: process.env.REACT_APP_firebase_project_id,

  storageBucket: process.env.REACT_APP_firebase_storage_bucket,

  messagingSenderId: process.env.REACT_APP_firebase_messaging_sender_id,

  appId: process.env.REACT_APP_firebase_app_id

};
firebase.initializeApp(firebaseConfig);


const messaging = getMessaging();

export const getTheToken = (setTokenFound) => {
    getToken(messaging, {vapidKey: process.env.REACT_APP_vap_id_key,topic: 'test'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }


// Initialize Firebase
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
});
