import { styled } from "styled-components";
import { bgValue } from "../../GlobalStyle";

const CardContainer = styled.div<bgValue>`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  min-width: 250px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(prop) => prop.toggleBg ? 'var(--dark-blue)': 'var(--white)'};
`

const FlagBox = styled.div`
  height: 175px;
  img {
    border-radius: 6px 6px 0 0;
  }
`

const CountryDetailsContainer = styled.div`
  padding: 0.5rem 1.3rem 1.3rem 1.3rem;
`

const CountryName = styled.h2`
  margin-top: 0.7rem;
  font-size: 1.09rem;
  font-weight: 800;
`

const CountryDetails = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Population = styled.p`
  font-weight: 800;
  font-size: 0.8rem;
  span {
    font-weight: normal;
  }
`

const Region = styled(Population)`

`
const Capital = styled(Population)`

`

export const Styles = {
  CardContainer,
  FlagBox,
  CountryName,
  CountryDetailsContainer,
  CountryDetails,
  Population,
  Region,
  Capital
}