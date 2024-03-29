import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    profileHoverColor: '#2905b5',
    locationColor: '#4287f5',
    accentColor: '#e7e9fc',
    mainTextColor: '#bb2649',
    statColor: '#bb2649',
    primary: '#08185c',
    sectionBsgColor: '#fafae8',
    tableBorderColor: '#f4f4fd',
    offLine: '#b01020',
    TableBcgColor: '#dddff8',
    TBodyDataColor: '#F5D7BF',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
