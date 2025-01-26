import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '@components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import axios from 'axios';

const HomePage = lazy(() => import('@pages/HomePage'));
const FavoritePage = lazy(() => import('@pages/FavoritePage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API;

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
