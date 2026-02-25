import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { products } from './constants/index.js'

createRoot(document.getElementById('root')).render(

    <App products={products}/>
)
