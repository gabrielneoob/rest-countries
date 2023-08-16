import { styled } from "styled-components";
import { bgValue } from "../../GlobalStyle";

const Page = styled.div`
  display: grid;

  @media(max-width: 950px) {
    justify-content: center;
  }

`

const Btn = styled.button`
  border: none;
  outline: none;
  background-color: inherit;

`

const CountryFlag = styled.div`
  max-height: 365px;
  max-width: 600px;
  flex: 1;

  @media(max-width: 950px) {
    max-width: 400px;

  }
`

const CountryDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 950px) {
    text-align: center;
  }
`

const CountryName = styled.h2`
  margin-bottom: 2rem;
`

const NativeName = styled.p<bgValue>`
  font-size: 0.8rem;
  color: ${(prop) => prop.toggleBg ? '#ccc' : '#333'};
  span {
    font-size: 0.9rem;
    font-weight: 600;
  }
`

const Population = styled(NativeName)``
const Region = styled(NativeName)``
const SubRegion = styled(NativeName)``
const Capital = styled(NativeName)``
const Domain = styled(NativeName)``
const Currencies = styled(NativeName)``
const Languages = styled(NativeName)``


export const Styles = {
  Page,
  Btn,
  CountryFlag,
  CountryDetails,
  CountryName,
  NativeName,
  Population,
  Region,
  SubRegion,
  Capital,
  Domain,
  Currencies,
  Languages
}