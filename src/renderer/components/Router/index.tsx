import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from 'framer-motion';
import { map, times } from 'lodash';
import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { toGraphicUrl, useContent } from '../Content';
import SplashPage from '/@/routes/1_Splash';
import MenuPage from '/@/routes/2_Menu';
import HolidayPage from '/@/routes/3_Holiday';

const levels = 6;

const TransitionBar = (props: {
  index: number;
  transitionValue: MotionValue<number>;
}) => {
  const { index, transitionValue } = props;
  const dx = useTransform(transitionValue, (tv) => {
    let ntv = tv;
    //loop
    ntv = ((ntv + 2) % 2) - 1;
    //scale
    ntv *= -3000 * ((ntv > 0 ? index : levels - index) / levels) - 500;
    return ntv;
  });

  return (
    <div className="flex-1 relative">
      <svg className="absolute -top-1000px">
        <defs>
          <filter id={`transition-${index}`}>
            <motion.feOffset dy={dx} />
          </filter>
        </defs>
      </svg>
      <motion.div
        className="absolute bg-white inset-0 bg-cover"
        style={{
          backgroundImage: `url(${toGraphicUrl('/TransitionBar.png')})`,
          filter: `url(#transition-${index})`,
        }}
      />
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  const transitionValue = useRef(new MotionValue(0)).current;
  const transitionDuration = useContent(
    (c) => c.config.transitionDuration || 0.8,
  );

  return (
    <>
      <div className="fixed inset-0 flex flex-col z-100 pointer-events-none">
        {map(times(levels), (i) => (
          <TransitionBar key={i} index={i} transitionValue={transitionValue} />
        ))}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={location.pathname}
          variants={{
            initial: { x1: -1 },
            animate: {
              x1: 0,
              transition: {
                duration: transitionDuration,
                ease: 'easeIn',
              },
            },
            exit: {
              x1: 1,
              transition: {
                duration: transitionDuration,
                ease: 'easeOut',
              },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className="contents"
          onUpdate={(latest) => {
            const val = latest.x1 as number;
            transitionValue.set(val);
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<SplashPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/holiday/:holidayIndex" element={<HolidayPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
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
