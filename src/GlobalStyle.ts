import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: hsl(209, 23%, 22%);
    --dark-blue-dark: hsl(207, 26%, 17%);
    --dark-blue-ligh:  hsl(200, 15%, 8%);
    --dark-gray: hsl(0, 0%, 52%);
    --very-light: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  html {
    display: flex;
    justify-content: center;
  }
`

export const Container = styled.div`
  max-width: 1440px;
`