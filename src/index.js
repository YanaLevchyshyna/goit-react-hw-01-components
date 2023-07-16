import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    locationColor: '#4287f5',
    accentColor: '#e7e9fc',
    nameColor: '#031087',
    statColor: '#ebf9fa',
    primary: '#08185c',
    sectionBsgColor: '#fafae8',
    isOnline: '#0bb51f',
    offLine: '#b01020',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
