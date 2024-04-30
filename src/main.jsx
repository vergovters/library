import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './app/Processes.jsx'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './app/context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
)
