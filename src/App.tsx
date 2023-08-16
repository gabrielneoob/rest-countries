import {  Container,  GlobalStyle } from "./GlobalStyle"
import Header from './components/header'
import { useEffect, useState} from "react"
import { countryContext } from "./GlobalContext"
import MainRoutes from "./routes/MainRoutes"


const App = () => {
  const { state } = countryContext();
  // const searchCountry = () => {
  //   const newCountries = countries?.filter((country) => country.name.common.toLowerCase().startsWith(countryInput.toLowerCase()))
  //   setCountries(newCountries)
  // }

  // useEffect(() => {
  //   filterCountry(countries, state.countryInput);
  // }, [state.countryInput])

  // useEffect(() => {
  //   loadCountries()
  // }, [])



  return (
    <>
      <GlobalStyle toggleBg ={state.toggleBg}/>
        <Header/>
        <Container padTop>
          <MainRoutes />        
        </Container>
    </>
  )
}

export default App