import { useEffect, useState } from 'react'
import CountryContainer from '../../components/countryContainer'
import { countryContext } from '../../GlobalContext'
import CountryCard from '../../components/countryCard'
import Flex from '../../components/flex'
import { stylesFlex } from '../../components/flex/styles'
import Input from '../../components/input'
import Select from '../../components/select'
import { api } from '../../api'



const Home = () => {
  const { state, changeInput, loadCountriesByRegion, countriesByRegion } = countryContext();
  const [testSelect, setTestSelect] = useState('all')

  useEffect(() => {
    loadCountriesByRegion(testSelect)
  }, [testSelect])


  return (
    <>
      <Flex css={stylesFlex.containerInputSelect}>
          <Input
          onChange={(e) => changeInput(e)}
          value={state.countryInput}
          placeHolder="Search for a country..." 
          />
          <Select name="country" onChange={(e) => setTestSelect(e.target.value)}>
            <option value="all" >Filter by Region</option>
            {api.countries.map((countrie) => <option 
            value={countrie}
            key={countrie.toLowerCase()}
            >
            {countrie}
            </option>)}
          </Select>
        </Flex>
      <CountryContainer>
        {state.countryInput ? countriesByRegion.filter((country) => country.name.common.toLowerCase().startsWith(state.countryInput.toLowerCase())).map((country) => <CountryCard data={country} key={country.name.common.toLowerCase()}/>) : countriesByRegion.map((countrie) => <CountryCard data={countrie} key={countrie.name.common.toLowerCase()}/>)}
      </CountryContainer>
    </>
  )
}

export default Home