import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import PartDetailPage from './pages/PartDetailPage.jsx';
import QuotePage from './pages/QuotePage.jsx';
import { QuoteProvider } from './context/QuoteContext.jsx';

function App() {
  return (
    <QuoteProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/parts/:id" element={<PartDetailPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Route>
      </Routes>
    </QuoteProvider>
  );
}

export default App;
