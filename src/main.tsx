import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // <--- On utilise HashRouter ici

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* <--- C'est ça qui manquait ! */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
