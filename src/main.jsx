import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx'; // Fixed import
import Netflix from './components/Netflix.jsx'; // Fixed import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Netflix /> 
  </StrictMode>
);
