import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gallery } from './pages/Gallery';

import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
