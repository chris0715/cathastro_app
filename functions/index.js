const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendNotifications = functions.database.ref('/messages/{messageId}')
.onWrite(event => {
  const snapshot = event.data
  if (snapshot.previousVal()) {
    return 
  }

  const payload = {
    notifcation: {
      title: `${snapshot.val().author}`,
      body: `${snapshot.val().msg}`,
      icon: 'assets/icon.png',
      click_action: `https://${functions.config().firebase.authDomain}`
    }
  }

  return admin.database().ref('fcmTokens').once('value').then(allTokens => {
    if (allTokens.val()) {
      const tokens = []
      for (let fcmTokenKey in allTokens.val()) {
        const fcmToken = allTokens.val()[fcmTokenKey]
        if (fcmToken.user_id != snapshot.val().user_id) {
          tokens.push(fcmToken.token)
        }
      }
       if (tokens.length > 0) {
         return admin.messaging().sendToDevice().then(response => {
           const tokensToRemove = []
         })
       }
    }
  })
})