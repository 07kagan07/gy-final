import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "./sass/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
)
