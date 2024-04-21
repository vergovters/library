
import React from 'react';
import Layot from './layout/Layout';
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import ProtectedRoute from './auth/ProtectedRoute';
import BookPage from './pages/BookPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layot showHero><HomePage/></Layot>}/>
      <Route path='/books' element={<Layot showHero={false}><BooksPage/></Layot>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/books/:id" element={<Layot showHero={false}><BookPage/></Layot>}/>
      </Route>
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
