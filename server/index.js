const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./first-firebase-project-chriswf-f973e4ed690d');

console.log('the obj: ', serviceAccount)

require('dotenv');


const app = express();
app.use(cors());

const port = 1738;


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

});

const message = {
    data: {
      score: '850',
      time: '2:45'
    },
    token: 'cJUP52afv1314RshsG2iOl:APA91bE8oOGsstVc6qSI8zp2-BEB6qicsGmxUojhSf8hDBvuwc6WATLsnbgPG6iqG4kmmvhIXOgTTZeZ58MfjNN6wEn5jY8fehRtTKBJ6X9mMULrLGzaZge8mYYRao5rzorbp46pdT0Y'
  };

setTimeout(() => {
    admin.messaging().send(message)
    .then((response) => {

      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}, 1000)

app.listen(port, () => {
    console.log('Listening on port: ', port);
});