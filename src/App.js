import React from 'react';
import {ThemeProvider} from 'styled-components';
import './App.css';
import {theme} from './config/theme';
import Routes from './config/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
