import { styled } from "styled-components";
import { bgValue } from "../../GlobalStyle";

const SelectContainer = styled.div<bgValue>`
  box-shadow: ${(prop) => prop.toggleBg ? '0px 2px 2px 1px #123' : '0px 2px 2px 1px #eee'};
  background-color: ${(prop) => prop.toggleBg ? 'var(--dark-blue)' : 'var(--white)'};
  width: 180px;
  padding: 0 1rem;
  height: max-content;
  border-radius: 6px;
  cursor: pointer;
`

const Select = styled.select<bgValue>`
  background-color: ${(prop) => prop.toggleBg ? 'var(--dark-blue)' : 'var(--white)'};
  border: none;
  padding: 1rem 0;
  outline: none;
  width: 100%;
  cursor: pointer;
  position: relative;


  option {
    border: none;
    position: absolute;
    width: 180px;
    outline-color: #fff;
  }
`

export const Styles = {
  Select,
  SelectContainer
}