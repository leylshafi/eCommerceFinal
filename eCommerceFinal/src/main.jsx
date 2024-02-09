import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { ContextWrapper } from './ContextWrapper.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ContextWrapper>
    <App />
    </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
