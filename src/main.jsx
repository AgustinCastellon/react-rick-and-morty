
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/fonts/fonts.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
