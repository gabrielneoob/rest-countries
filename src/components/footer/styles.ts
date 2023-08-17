import { styled } from "styled-components";
import { bgValue } from '../../GlobalStyle'

const BackGroundFooter = styled.div<bgValue>`
  width: 100%;
  padding: 2rem 0;
  `

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
   p {
    margin-right: 0.6rem;
    @media(max-width: 400px) {
      font-size: 0.8rem;
    }
   }
`

const Li = styled.li`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ease-in-out all 0.3s;
`

export const Styles = {
  BackGroundFooter,
  Footer,
  Li,
  Link
}