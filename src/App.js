import React from 'react';
import {ThemeProvider} from 'styled-components';
import './App.css';
import {theme} from './config/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          Gestion BIbliothèque
        </header>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
