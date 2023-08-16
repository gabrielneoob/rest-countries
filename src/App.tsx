import {  Container,  GlobalStyle } from "./GlobalStyle"
import Header from './components/header'
import { countryContext } from "./GlobalContext"
import MainRoutes from "./routes/MainRoutes"


const App = () => {
  const { state } = countryContext();
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