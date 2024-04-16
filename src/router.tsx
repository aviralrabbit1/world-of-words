import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { Home } from './pages/Home';
import Antonym from './pages/Antonym';
import Synonym from './pages/Synonym';
import { NotFound } from './pages/NotFound';
import Navbar from './Navbar';
import Rhymes from './pages/Rhymes';
import Followers from './pages/Followers';
import Predecessors from './pages/Predecessors';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/antonym" element={<Antonym />} />
        <Route path="/synonym" element={<Synonym />} />
        <Route path="/rhymes" element={<Rhymes />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/predecessors" element={<Predecessors />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
