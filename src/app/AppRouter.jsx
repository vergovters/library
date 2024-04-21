
import React from 'react';
import Layot from './layout/Layout';
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layot showHero><HomePage/></Layot>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
