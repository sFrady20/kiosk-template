import React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import SplashPage from '/@/routes/1_Splash';
import MenuPage from '/@/routes/2_Menu';
import HolidayPage from '/@/routes/3_Holiday';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/holiday/:holidayIndex" element={<HolidayPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
