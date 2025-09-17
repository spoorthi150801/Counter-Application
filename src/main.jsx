import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunctionalCounter from './FunctionalCounter.jsx'
import ClassCounter from './ClassCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FunctionalCounter /> */}
    <ClassCounter/>
  </StrictMode>,
)
