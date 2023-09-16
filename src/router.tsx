import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Router.css';

import { Home } from './pages/Home';
import Antonym from './pages/Antonym';
import Synonym from './pages/Synonym';
import { NotFound } from './pages/NotFound';
import Navbar from './Navbar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/antonym" element={<Antonym />} />
        <Route path="/synonym" element={<Synonym />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
