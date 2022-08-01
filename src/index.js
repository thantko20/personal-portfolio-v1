import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme, { GlobaStyles } from './theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobaStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
