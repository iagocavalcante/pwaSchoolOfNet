importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-app.js') //eslint-disable-line
importScripts('https://www.gstatic.com/firebasejs/4.9.1/firebase-messaging.js') //eslint-disable-line

let config = {
  messagingSenderId: '759777202783'
}

firebase.initializeApp(config) //eslint-disable-line

const messaging = firebase.messaging() //eslint-disable-line

messaging.setBackgroundMessageHandler(function (paylod) {
  return self.registration.showNotification({}, {})
})
