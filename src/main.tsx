import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './styles/main.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error("Root container missing in index.html")
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
