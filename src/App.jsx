import React from 'react';
import GlobalStyle from './core/global';
import { Route, Routes } from 'react-router';
import { ROUTES } from 'core/Routes';
import { BrowserRouter } from 'react-router-dom';
import Nav from 'components/Nav';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
