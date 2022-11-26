import React from 'react'
import ReactDOM from 'react-dom/client';
import Weather from './components/Weather.jsx'
import './App.css'

//e167a121565880362a4769a2e4acf518
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <Weather />
    </div>
  </React.StrictMode>
)
