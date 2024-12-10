import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Reset from './styles/Reset.js';
import GlobalStyle from './styles/GlobalStyle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </StrictMode>
);
