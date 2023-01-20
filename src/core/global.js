import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    overflow: auto;
  }
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  body {
    height: 100%;
    background: #fff;
    color: #000;
    overflow: hidden;
  }
  img {
    border: 0;
  }
  button,
  input[type='submit'] {
    background-color: ${(p) => p.theme.primary_yellow};
    border-radius: 10px;
    border: unset;
    font-weight: 600;
    margin: 10px 0;
    padding: 10px 30px;
    width: fit-content;
    cursor: pointer;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  ul {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 20px 0;
    img {
      margin-right: 30px;
    }
    a {
      text-decoration: none;
      color: #000;
      font-weight: 600;
    }
  }
  h1 {
    font-size: 30pt;
  }
  h4,
  h5,
  h6,
  label {
    font-size: 14pt;
  }
  p {
    font-size: 12pt;
    line-height: 1.15;
    max-width: 25ch;
  }
  input,
  select {
    border-radius: 6px;
    padding: 0 6px;
  }
`;

export default GlobalStyle;
