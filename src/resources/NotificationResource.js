export default class NotificationResource {
  
  allTokens = []
  tokensLoaded = false

  constructor(messaging, database) {
    this.messaging = messaging
    this.database = database
    console.log('Instantiated')
    try {
      this.messaging
      .requestPermission()
      .then(res => {
        console.log('Permission Granted')
      })
      .catch(err => { 
        console.log('No access ', err)
      })
    } catch(err) {
      
    }
    this.setupTokenRefresh()
    this.database.ref('/fcmTokens')
    .on('value', snapshot => {
      this.allTokens = snapshot.val()
      this.tokensLoaded = true
    })
  }

  setupTokenRefresh() {
    this.messaging.onTokenRefresh(() => {
      this.saveTokenToServer();
    })
  }

  saveTokenToServer() {
    this.messaging.getToken()
    .then(res => {
      if (this.tokensLoaded) {
        const exisitingToken = this.findExistingToken(res)
        if (exisitingToken) {
          console.log(exisitingToken)
        } else {
          this.registerToken(res)
        }
      }
    })
  }

  findExistingToken(tokenToSave) {
    for (let tokenKey in this.allTokens) {
      const token = this.allTokens[tokenKey].token
      if (token === tokenToSave) {
        return tokenKey
      }
      return false
    }
  }

  changeUser(user) {
    this.user = user
  }

  registerToken(token) {
    this.database.ref('fcmTokens/')
    .push({
      token,
      user_id: this.user.userId
    })
  }
}