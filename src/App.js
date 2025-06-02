import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Intro from './sub/Intro';
import Api from './sub/Api';
import Contact from './sub/Contact';
import MovieDetail from './sub/MovieDetail';
import NotFound from './sub/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/movie2025' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/Api' element={<Api />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/movie-detail' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
