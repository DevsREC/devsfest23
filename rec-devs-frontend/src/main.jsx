import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ScrollContainer from './components/ScrollContainer/ScrollContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <ScrollContainer>
        <App />
      </ScrollContainer>
    </React.StrictMode>
  </HashRouter>,
)
