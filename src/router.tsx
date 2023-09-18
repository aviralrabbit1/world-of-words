import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { Home } from './pages/Home';
import Antonym from './pages/Antonym';
import Synonym from './pages/Synonym';
import { NotFound } from './pages/NotFound';
import Navbar from './Navbar';
import Rhymes from './pages/Rhymes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/datamuse" element={<Datamuse />} /> */}
        <Route path="/antonym" element={<Antonym />} />
        <Route path="/synonym" element={<Synonym />} />
        <Route path="/rhymes" element={<Rhymes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
