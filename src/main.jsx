import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Auth from './pages/auth/auth.jsx';
import HomePage from './pages/home/index.jsx';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/auth' element={<Auth/>}></Route>
    </Routes>
  );
}

export default Main;