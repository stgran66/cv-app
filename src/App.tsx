import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { CommonLayout } from 'components/layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExperiencePage = lazy(
  () => import('./pages/ExperiencePage/ExperiencePage')
);
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        <Route path='experience' element={<ExperiencePage />} />
        <Route path='services' element={<ServicesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
