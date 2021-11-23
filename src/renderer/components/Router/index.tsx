import { AnimatePresence, motion } from 'framer-motion';
import { filter, map, times } from 'lodash';
import React, { ReactNode, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { HashRouter } from 'react-router-dom';
import SplashPage from '/@/routes/1_Splash';
import MenuPage from '/@/routes/2_Menu';
import HolidayPage from '/@/routes/3_Holiday';

const AnimatedRoute = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        animate: { transition: { when: 'beforeChildren' } },
        exit: { transition: { when: 'afterChildren' } },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contents"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Transition>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                <SplashPage />
              </AnimatedRoute>
            }
          />
          <Route
            path="/menu"
            element={
              <AnimatedRoute>
                <MenuPage />
              </AnimatedRoute>
            }
          />
          <Route
            path="/holiday/:holidayIndex"
            element={
              <AnimatedRoute>
                <HolidayPage />
              </AnimatedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </Transition>
  );
};

const levels = 5;
const Transition = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <div className="fixed inset-0 flex flex-col z-100 hidden">
        {map(times(levels), (i) => (
          <div className="flex-1 relative">
            <svg className="absolute -top-1000px">
              <defs>
                <filter id={`transition-${i}`}>
                  <feDropShadow
                    dx={0}
                    dy={0}
                    stdDeviation={200}
                    color="black"
                  />
                </filter>
              </defs>
            </svg>
            <div
              className="absolute bg-white inset-0"
              style={{
                filter: `url(#transition-${i})`,
              }}
            />
          </div>
        ))}
      </div>
      {children}
    </>
  );
};

const Router = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default Router;
