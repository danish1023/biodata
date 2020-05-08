importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCx_hSEBw4qZHLlcG4rPmQxE3nRk4VXdBE",
    authDomain: "webpush-65641.firebaseapp.com",
    databaseURL: "https://webpush-65641.firebaseio.com",
    projectId: "webpush-65641",
    storageBucket: "webpush-65641.appspot.com",
    messagingSenderId: "561192500901",
    appId: "1:561192500901:web:12186b70c84e4f32e6d74c",
    measurementId: "G-WD86559KLX"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Handling background message ', payload);
    return self.registration.showNotification('Test', {
      body: 'Test Message',
    });
});