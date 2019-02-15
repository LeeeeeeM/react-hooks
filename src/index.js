import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App1 from './App.js'
import App2 from './App.jsx'

import App3 from './Test.jsx'

import DisplayWithDelay from './DisplayWithDelay.jsx'

import DisplayWithDelay1 from './DisplayWithDelay.js'

import HOC, { EHOC } from './TestHOC'

ReactDOM.render(<App1 />, document.getElementById('app1'))

// ReactDOM.render(<App2 />, document.getElementById('app2'))

ReactDOM.render(<App3 />, document.getElementById('app2'))

ReactDOM.render(<DisplayWithDelay isLoading={true} />, document.getElementById('app4'))

ReactDOM.render(<DisplayWithDelay1 isLoading={true} />, document.getElementById('app3'))

ReactDOM.render(<HOC />, document.getElementById('app5'))

ReactDOM.render(<EHOC />, document.getElementById('app6'))