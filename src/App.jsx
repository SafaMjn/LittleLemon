import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router';
import { ROUTES } from 'core/Routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './core/global';
import themes from './core/themes';
import Nav from 'components/Nav';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Nav />
        <Routes>
          {ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
