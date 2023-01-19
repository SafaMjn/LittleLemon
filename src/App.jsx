import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import GlobalStyle from './global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
