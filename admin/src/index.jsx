import React from 'react'
import {render} from 'react-dom'
import App from './App'

render(<App />, document.getElementById('mount'))

if(module.hot) {
  module.hot.accept('./App', () => {

    const NextApp = require('./App').default
    render(<NextApp />, document.getElementById('mount'))
    
  })
}