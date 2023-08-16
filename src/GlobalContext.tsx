import React, {  createContext, useContext, useReducer, useState } from "react";
import { countryReducer, initialState } from "./reducers/countryReducer";
import { CountryProps } from "./components/countryCard/CountryCard";
import { api } from "./api";

type ContextProps = {
  state: {
    toggleBg: boolean;
    countryInput: string;
  },
  countriesByRegion: CountryProps[];
  toggleBg: () => void;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loadCountriesByRegion: (region: string) => void;
}


const Context = createContext<ContextProps>({
  state: {
    toggleBg: false,
    countryInput: '',
  },
  countriesByRegion: [],
  toggleBg: () => {},
  changeInput: () => {},
  loadCountriesByRegion: () => {}
})


export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);
  const [countriesByRegion, setCountriesByRegion] = useState<CountryProps[]>([])

  const loadCountriesByRegion = async (region: string) => {
    if(region === 'all') {
      const data = await api.getAllCountries();
      setCountriesByRegion(data)
    } else {
      const data = await api.getCountriesByRegion(region);
      setCountriesByRegion(data)

    }
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: {
        countryInput: e.target.value
      }
    })
  }

  const toggleBg = () => {
    dispatch({
      type: 'toggle_bg'
    })
  }

  return (
    <Context.Provider value={{
      countriesByRegion,
      loadCountriesByRegion,
      changeInput,
      state,
      toggleBg,
    }}>
      {children}
    </Context.Provider>
  )
}

export const countryContext = () => useContext(Context)