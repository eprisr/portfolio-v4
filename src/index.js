import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './normalize.css'

// if (module.hot) module.hot.accept()

// @ts-ignore
const root = createRoot(document.getElementById('root'))

root.render(<App />)
