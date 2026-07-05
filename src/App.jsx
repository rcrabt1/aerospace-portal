import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import CatalogPage from './pages/CatalogPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
