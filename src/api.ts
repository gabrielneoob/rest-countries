export const api = {
  countries: [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ],
  getAllCountries: async () => {
    try{
      const response = await fetch('https://restcountries.com/v3.1/all');
      const json = await response.json()
      console.log(json)
      return json
    }
    catch(e) {
      alert(e)
    }
  },

  getCountriesByRegion: async (region: string) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await response.json()
      return data;
    }
    catch(e) {

    }
  }
}