import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reserva from './Reserva.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <Reserva />
  </React.StrictMode>,
)
