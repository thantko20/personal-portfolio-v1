import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme, { GlobalStyles } from './theme';
import { ThemeProvider } from 'styled-components';
import ScrollProvider from './ScrollProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
