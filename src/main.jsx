import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import {Context} from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
)
