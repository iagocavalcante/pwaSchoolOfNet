import firebase from 'firebase'

export default function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
      .then((registratition) => {
        const messaging = firebase.messaging()

        let getToken = () => {
          messaging.getToken() //eslint-disable-line
            .then((currentToken) => {
              if (currentToken) {
                console.log('Enviar isso para um servidor: ', currentToken)
                return currentToken
              }
              console.warn('Nenhum id disponivel')
            })
        }

        messaging.useServiceWorker(registratition)
        messaging.requestPermission()
          .then(() => {
            getToken()
          })
      })
      .catch((err) => {
        console.log('Erro => ', err)
      })
  }
}
