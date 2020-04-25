import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { defaultStore, reducer, StoreContext } from './store';
import HomePage from './components/home-page/HomePage';
import GamePage from './components/game-page/GamePage';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';

import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange,
    type: 'dark',
  },
});

function App(): React.ReactElement {
  const [store, dispatch] = React.useReducer(reducer, defaultStore);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreContext.Provider value={{ dispatch, store }}>
        {store.isGameActive ? <GamePage /> : <HomePage />}
      </StoreContext.Provider>
    </ThemeProvider>
  );
}

export default App;
