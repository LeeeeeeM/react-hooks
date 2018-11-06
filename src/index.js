import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App1 from './App.js'
import App2 from './App.jsx'

ReactDOM.render(<App1 />, document.getElementById('app1'))

ReactDOM.render(<App2 />, document.getElementById('app2'))