import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-weight: 400;
    overflow: visible;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: 'DM Sans', sans-serif!important;
    font-size: 20px;
    line-height: 32px;

    --mobile-screen-size: 991px;
  }
`

export default GlobalStyle
