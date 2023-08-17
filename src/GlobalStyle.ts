import { createGlobalStyle, styled } from "styled-components";
type Props = {
  padTop?: boolean;
}

export type bgValue = {
  toggleBg: boolean;
}

export const GlobalStyle = createGlobalStyle<bgValue>`
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
    text-decoration: none;
    list-style: none;
    color: ${(prop) => prop.toggleBg ? 'var(--white)': '#000'};
  }

  img {
    width: 100%;
    height: 100%;
  }

  html {
    height: 100vh;
    background-color: ${(prop) => prop.toggleBg ? 'var(--dark-blue-dark)' : 'var(--very-light)'};
  }
`

export const Container = styled.div<Props>`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  min-width: 250px;
  padding: 0 1rem;
  position: relative;
  padding-top: ${(props) => props.padTop ? '7rem': 'none'};
`