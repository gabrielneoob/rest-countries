export const initialState = {
  toggleBg: false,
  countryInput: '',
}

type CountryItems = {
  toggleBg: boolean;
  countryInput: string;
}

type ToggleBg = {
  type: 'toggle_bg',
}

type ChangeInput = {
  type: 'change_input',
  payload: {
    countryInput: string
  }
}

type listActions = ToggleBg | ChangeInput ;

export const countryReducer = (state: CountryItems, action: listActions) => {
  
  switch(action.type) {
    case 'toggle_bg': return {
      ...state,
      toggleBg: !state.toggleBg
    }
    case 'change_input': return {
      ...state,
      countryInput: action.payload.countryInput
    }
    // case 'filter_countries':
    //   const newCountries = action.payload.countries.filter((countrie) => countrie.name.common.toLowerCase().startsWith(action.payload.countryInput.toLowerCase())) 
    //   return {
    //     ...state,
    //     filteredCountries: newCountries
    //   }
  }
}