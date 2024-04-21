import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './app/AppRouter.jsx'
import './main.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    
  </React.StrictMode>,
)
