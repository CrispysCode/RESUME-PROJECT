import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import General from './components/General.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
  </StrictMode>,
)
