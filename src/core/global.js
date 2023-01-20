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
  a,
  abbr,
  acronym,
  address,
  area,
  b,
  bdo,
  big,
  blockquote,
  body,
  button,
  caption,
  cite,
  code,
  col,
  colgroup,
  dd,
  del,
  dfn,
  div,
  dl,
  dt,
  em,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  i,
  images,
  ins,
  kbd,
  label,
  legend,
  li,
  map,
  object,
  ol,
  p,
  param,
  pre,
  q,
  samp,
  small,
  span,
  strong,
  sub,
  sup,
  table,
  tbody,
  td,
  textarea,
  tfoot,
  th,
  thead,
  tr,
  tt,
  ul,
  var {
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
  button {
    background-color: ${(p) => p.theme.primary_yellow};
    border-radius: 10px;
    border: unset;
    padding: 10px 30px;
    font-weight: 600;
    gap: 8px;
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
  h6 {
    font-size: 14pt;
  }
  p {
    font-size: 12pt;
    line-height: 1.15;
    max-width: 25ch;
  }
`;

export default GlobalStyle;
