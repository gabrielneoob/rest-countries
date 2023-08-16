import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import CountryPage from '../pages/countryPage';

const MainRoutes = () => useRoutes([
  {path: '/', element: <Home />},
  {path: '/:country', element: <CountryPage />},
])

export default MainRoutes