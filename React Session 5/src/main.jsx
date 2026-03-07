import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/scss/global.scss'
import MenuProvider from './assets/components/Lecture4Practice/Component1.jsx'

// import ContextProvider from './assets/components/Lecture4/contextAPI/contextAPI.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <ContextProvider> */}

   {/* <MenuProvider> */}
  <App />
   {/* </MenuProvider> */}

   

   {/* </ContextProvider> */}
  </StrictMode>,
)
