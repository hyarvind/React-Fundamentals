import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp() {
  return(
    <div>
      <h3>custom App !</h3>
    </div>
  )
  
}
ReactDOm.createRoot(document.getElementById('root')).render(
   <App/>
)
