import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from "axios"
import { BrowserRouter } from 'react-router-dom'

axios.defaults.baseURL=import.meta.env.VITE_API_RWAY_URL



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
