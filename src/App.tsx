import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { Hyrox } from './pages/Hyrox';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hyrox" element={<Hyrox />} />
      </Route>
    </Routes>
  );
}

export default App;
