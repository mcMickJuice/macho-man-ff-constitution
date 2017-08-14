import React from 'react'
import {render} from 'react-dom'
import ChampionshipBeltPath from './components/ChampionshipBeltPath'

const mount = document.getElementById('mount')

render(<ChampionshipBeltPath />, mount)

if(module.hot) {
  module.hot.accept('./components/ChampionshipBeltPath', () => {
    const NextApp = require('./components/ChampionshipBeltPath').default
    render(<NextApp />, mount)
  })
}