import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { Hyrox } from './pages/Hyrox';
import { MentionsLegales } from './pages/MentionsLegales';
import { CGV } from './pages/CGV';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hyrox" element={<Hyrox />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="cgv" element={<CGV />} />
        <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Route>
    </Routes>
  );
}

export default App;
