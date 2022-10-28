import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

