
import React from 'react';
import Layot from './layout/Layout';
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import ProtectedRoute from './auth/ProtectedRoute';
import BookPage from './pages/BookPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorPage from './pages/AuthorPage';
import SearchPage from './pages/SearchPage';
import StatisticPage from './pages/StatisticPage';
import ProfilePage from './pages/ProfilePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layot showHero><HomePage/></Layot>}/>
      <Route path='/books' element={<Layot showHero={false}><BooksPage/></Layot>}/>
      <Route path='/registration' element={<Layot showHero={false}><RegistrationPage/></Layot>}/>
      <Route path='/login' element={<Layot showHero={false}><LoginPage/></Layot>}/>
      <Route path='/authors' element={<Layot showHero={false}><AuthorsPage/></Layot>}/>
      <Route path="/search/:title" element={<Layot showHero={false}><SearchPage/></Layot>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/books/:id" element={<Layot showHero={false}><BookPage/></Layot>}/>
        <Route path="/profile" element={<Layot showHero={false}><ProfilePage/></Layot>}/>
        <Route path="/authors/:id" element={<Layot showHero={false}><AuthorPage/></Layot>}/>
        <Route path="/statistic" element={<Layot showHero={false}><StatisticPage/></Layot>}/>
      </Route>
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
