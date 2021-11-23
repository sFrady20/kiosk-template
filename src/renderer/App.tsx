import React from 'react';
import ContentProvider from './components/Content';
import Router from './components/Router';

const App = () => {
  return (
    <ContentProvider>
      <div className="fixed left-0 top-0 w-full h-full flex flex-col justify-center items-center select-none">
        <Router />
      </div>
    </ContentProvider>
  );
};

export default App;
