import { useState, useEffect } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import { Styles } from './styles'
import Flex from '../../components/flex'
import { countryContext } from '../../GlobalContext'
import { CountryProps } from '../../components/countryCard/CountryCard'
import Box from '../../components/box'


const CountryPage = () => {
  const navigate = useNavigate()
  const { country  } = useParams()
  const [currentCountry, setCurrentCountry] = useState<CountryProps>()
  const { countriesByRegion, state } = countryContext();
  let nativeName = '';

  const loadCurrentCountry = async () => {
    const currentCountry = countriesByRegion.filter((item) => item.name.common === country)[0]
    setCurrentCountry(currentCountry)
  }

  if( currentCountry) {
    nativeName = Object.values(currentCountry?.name.nativeName)[0].official
  }

  useEffect(() => {
    loadCurrentCountry()
    console.log(currentCountry)
  }, [currentCountry])

  if(currentCountry) {
    const { 
      population,
      region,
      subregion,
      capital,
      currencies,
      languages,
      tld,
      borders
     } = currentCountry
    return (
      <Styles.Page>
        <Flex css={{ backgroundColor: state.toggleBg ?'var(--dark-blue)' : 'var(--white)', padding: '0.5rem 2rem', borderRadius: '6px', boxShadow: state.toggleBg ? '0px 2px 2px 1px #123' : '0px 2px 2px 1px #eee', gap: '0.5rem', cursor: 'pointer', maxWidth: '120px', flexDirection: 'row'}}
        onClick={() => navigate(-1)}
        >
          <HiOutlineArrowNarrowLeft />
          <Styles.Btn>Back</Styles.Btn>
        </Flex>
  
        <Flex css={{marginTop: '4rem', gap: '6rem'}}>
          <Styles.CountryFlag>
            <img src={currentCountry?.flags.png} alt="" />
          </Styles.CountryFlag>
          <Styles.CountryDetails>
            <Styles.CountryName>
              {currentCountry?.name.common}
            </Styles.CountryName>
            <Flex css={{justifyContent: 'space-between'}}>
              <Box css={{gap: '0.5rem'}}>
                <Styles.NativeName toggleBg={state.toggleBg}>
                  <span>Native Name: </span>{nativeName}
                </Styles.NativeName>
                <Styles.Population toggleBg={state.toggleBg}>
                  <span>Population: </span>{population}
                </Styles.Population>
                <Styles.Region toggleBg={state.toggleBg}>
                  <span>Region: </span>{region}
                </Styles.Region>
                <Styles.SubRegion toggleBg={state.toggleBg}>
                  <span>Sub Region: </span>{subregion}
                </Styles.SubRegion>
                <Styles.Capital toggleBg={state.toggleBg}>
                  <span>Capital: </span>{capital}
                </Styles.Capital>
              </Box>
              <Box css={{gap: '0.5rem'}}>
                <Styles.Domain toggleBg={state.toggleBg}>
                  <span>Top Level Domain: </span>{tld?.map((item) => item)}
                </Styles.Domain>
                <Styles.Currencies toggleBg={state.toggleBg}>
                  <span>Currencies: </span>{currencies && Object.keys(currencies).map((currencie) => `${currencies[currencie as keyof typeof currencies]['name']}, ` )}
                </Styles.Currencies>
                <Styles.Languages toggleBg={state.toggleBg}>
                  <span>Languages: </span>{ languages && Object.values(languages).map((language) => `${language}, `)}
                </Styles.Languages>
              </Box>
            </Flex>
            {borders && <Flex css={{alignItems: 'center', marginTop: '3rem', flexWrap: 'wrap', gap: '1rem'}}>
                <span>Border Countries: </span>
                {borders.map((country) => <Box css={{backgroundColor: state.toggleBg ? 'var(--dark-blue)' : 'var(--white)', marginLeft: '0.7rem', fontSize: '0.8rem', justifyContent: 'center', padding: '0.3rem 0.5rem', borderRadius: '4px', fontWeight: '700'}}> 
                  {country}
                </Box>)}
              </Flex>}

          </Styles.CountryDetails>
        </Flex>
      </Styles.Page>
    )
  }

  
}

export default CountryPage