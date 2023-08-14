import { styled } from 'styled-components'

const BackGroundHeader = styled.div`
  box-shadow: 0px 2px 2px #eee;
  background-color: var(--white);
  position: fixed;
  z-index: 5;
  width: 100%;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`

const Title = styled.h1`
  font-weight: 800;
`

const Toggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;
`

const SchemeTitle = styled.span`

`

export const Styles = {
  BackGroundHeader,
  Header,
  Title,
  Toggle,
  SchemeTitle
}