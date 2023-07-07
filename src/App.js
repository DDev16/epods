import React from 'react';
import { ThemeProvider } from 'styled-components';
import Web3Provider from './web3/Web3Provider';

import MainScene from './mainScene';
import theme from '~/src/theme';
import NavBar from './components/navBar';
import UIControls from './components/uiControls';

function App() {
  return (
    <Web3Provider>
    <ThemeProvider theme={theme}>
      <NavBar />
      <UIControls />
      <MainScene />
    </ThemeProvider>
    </Web3Provider>

  );
}

export default App;
