// GlobalStyle.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "pretendard";
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default GlobalStyle;
