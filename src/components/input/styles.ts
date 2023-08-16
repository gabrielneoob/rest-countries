import { styled } from "styled-components";
import { bgValue } from "../../GlobalStyle";

const Icon = styled.div`
  display: flex;
  margin-right: 1rem;
`

const Input = styled.input<bgValue>`
  border: none;
  width: 100%;
  outline: none;
  background-color: ${(prop) => prop.toggleBg ? 'var(--dark-light)' : 'none'};
  &::placeholder {
    color: ${(prop) => prop.toggleBg ? 'var(--white)' : '#000'};
  }
`


export const Styles = {
  Input,
  Icon
}