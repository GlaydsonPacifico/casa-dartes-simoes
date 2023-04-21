import { BrowserRouter, Route as ReactRouterRoute, Routes as ReactRouterRoutes } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <ReactRouterRoute path='/' element={<Home />} />
        <ReactRouterRoute path='/gallery' element={<Gallery />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
