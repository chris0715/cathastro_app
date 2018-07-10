import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/app'
import './component/app.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./component/app', () => {
      const nextApp = require('./component/app').default
      ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, document.getElementById('root'))
    })
  }