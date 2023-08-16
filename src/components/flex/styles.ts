import { styled } from "styled-components"
import { bgValue } from "../../GlobalStyle"

const Flex = styled.div<bgValue>`
  display: flex;
  /* div, input {
    background-color: ${(prop) => prop.toggleBg ? 'var(--dark-blue)' : 'var(--white)'};
  } */
  
  /* div:nth-child(1) {
    box-shadow: ${(prop) => prop.toggleBg ? '0px 2px 2px 1px #123' : '0px 2px 2px 1px #eee'}
  } */

  @media(max-width: 375px) {
    margin-bottom: 1rem;
  }

  @media(max-width: 950px) {
    flex-direction: column;
  }

`

export const stylesFlex = {
  containerInputSelect: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  inputStyle: {
    width: '100%',
    maxWidth: '350px',
    marginBottom: '1rem',
    alignItems: 'center',
    padding: '1rem 1.7rem',
    borderRadius: '6px',
  }
}

export const Styles = {
  Flex
}