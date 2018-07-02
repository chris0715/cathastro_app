import React from 'react'
import ReactDOM from 'react-dom'
import myName from './component/component1'
import App from './app'
import '../public/assets/app.css'

ReactDOM.render(<App />, document.getElementById('root'))
if (module.hot) {
    module.hot.accept('./app', () => {
      const nextApp = require('./app').default
      ReactDOM.render(<App />, document.getElementById('root'))
    })
  }