import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { CounterContext } from './context/Countercontext.js'
import './index.css'
import App from './App.jsx'


function Main() {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <App />
    </CounterContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)