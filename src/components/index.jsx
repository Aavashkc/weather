import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './components/Weather.js';
import reportWebVitals from './reportWebVitals';
import AnimeQuotes from './components/AnimeQuotes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className ="App">
       <Weather />
    </div>

  </React.StrictMode>
);