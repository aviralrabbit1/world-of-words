import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Antonym from './pages/Antonym';
import Synonym from './pages/Synonym';
import { NotFound } from './pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/antonym" element={<Antonym />} />
      <Route path="/synonym" element={<Synonym />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
