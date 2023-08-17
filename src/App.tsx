import {  Container,  GlobalStyle } from "./GlobalStyle"
import Header from './components/header'
import { countryContext } from "./GlobalContext"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/footer"


const App = () => {
  const { state } = countryContext();
  return (
    <>
      <GlobalStyle toggleBg ={state.toggleBg}/>
        <Header/>
        <Container padTop>
          <MainRoutes />
          <Footer/>        
        </Container>
    </>
  )
}

export default App