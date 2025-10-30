import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
