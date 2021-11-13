import React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import SplashPage from '/@/routes/SplashPage';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
