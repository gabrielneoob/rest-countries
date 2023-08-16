import { Styles } from './styles';
import { countryContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';

export type CountryProps = {
  altSpellings?: string[];
  area?: number;
  borders: string[];
  capital?: string[];
  capitalInfo?: {
    latlng: string[]
  }
  car?: {
    side: string;
    signs: string[];
  }
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  cioc?: string;
  coatOfArms?: {
    png: string;
    svg: string;
  }
  continents?: string[];
  currencies?: object;
  demonyms?: object;
  fifa?: string;
  flag?: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  }
  idd?: {
    root: string;
    suffixes: string[]
  }
  independent?: boolean;
  landlocked?: boolean;
  languages?: object;
  latlng?: string[]
  maps?: {
    googleMaps: string;
    openStreetMaps: string;
  }
  name: {
    common: string;
    nativeName: object;
    official: string;
  }
  population: number;
  postalCode?: {
    format: string;
    regex: string;
  }
  region: 'Asia' | 'Africa' | 'Oceania' | 'America' | 'Europe';
  startOfWeek?: string;
  status?: string;
  subregion?: string;
  timezones?: string[];
  tld?: string[];
  translations?: object;
  unMember?: boolean;
}

const CountryCard = ({ data } : {data: CountryProps}) => {
  const navigate = useNavigate()
  const { state } = countryContext()
  return (
    <Styles.CardContainer
    toggleBg={state.toggleBg}
    onClick={() => navigate(`${data.name.common}`)}
    >
      <Styles.FlagBox>
        <img src={data.flags.png} alt="" />
      </Styles.FlagBox>
      <Styles.CountryDetailsContainer>
        <Styles.CountryName>
          {data.name.common}
        </Styles.CountryName>
        <Styles.CountryDetails>
          <Styles.Population>
            Population: <span>{data.population}</span>
          </Styles.Population>
          <Styles.Region>
            Region: <span>{data.region}</span>
          </Styles.Region>
          <Styles.Capital>
            Capital: <span>{data.capital}</span>
          </Styles.Capital>
        </Styles.CountryDetails>
      </Styles.CountryDetailsContainer>
    </Styles.CardContainer>
  )
}

export default CountryCard