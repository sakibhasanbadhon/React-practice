import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './App.jsx'; // Fixed import
import Netflix from './components/Netflix.jsx'; // Fixed import
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Netflix /> 
  </StrictMode>
);
