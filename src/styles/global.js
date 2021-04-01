import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts};
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  ul,
  li {
    list-style-type: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
