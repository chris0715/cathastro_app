  
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js")

  self.addEventListener('install', function() {
    console.log('installation completed')
  })

  self.addEventListener('activate', function() {
    console.log('Activate')
  })

  self.addEventListener('fetch', function(event) {
    console.log('Fectch', event.request)
  })

  firebase.initializeApp({
     messagingSenderId: '414735872504'
  })

  console.log('kk', firebase.messaging())