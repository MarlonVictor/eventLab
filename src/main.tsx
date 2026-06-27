import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/global.css'
import './styles/subscribe.css'
import './styles/event.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)