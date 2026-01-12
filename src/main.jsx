import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Suppress ONNX Runtime errors that don't affect app functionality
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('registerBackend')) {
    console.warn('ONNX Runtime initialization warning (non-critical):', event.message)
    event.preventDefault() // Prevent error from blocking app
  }
})

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

