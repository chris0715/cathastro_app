  self.addEventListener('install', function() {
    console.log('installation completed')
  })

  self.addEventListener('activate', function() {
    console.log('Activate')
  })

  self.addEventListener('fetch', function(event) {
    console.log('Fectch', event.request)
  })