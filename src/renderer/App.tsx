import React from 'react';
import Router from './components/Router';
import Snow from './components/Snow';

const App = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full flex flex-col justify-center items-center select-none">
        <Router />
      </div>
    </>
  );
};

export default App;
