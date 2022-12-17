import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Cadastro from '../pages/Cadastro';
import NotFound from '../pages/NotFound';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const PrivateRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/menu" />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Navigate to="/" />} />
      <Route path="/cadastro" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);
