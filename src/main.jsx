import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import General from './components/General.jsx'
import Education from './components/Education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    <Education />
  </StrictMode>,
)
