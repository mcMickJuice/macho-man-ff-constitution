import React from 'react'
import {render} from 'react-dom'

var mount = document.getElementById('mount')

var App = () => {
    return <div>
    <h3>Hey yoooo</h3>
    </div>
}

render(<App />, mount);