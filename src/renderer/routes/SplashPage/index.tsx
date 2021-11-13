import React from 'react';
import t from '../../util/t';

const SplashPage = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-size-7vw font-light max-w-55vw">
        {t('splash/title')}
      </div>
      <button className="mt-5vw border-0.18vw border-black bg-none rounded-full px-3vw py-1.5vw text-size-2vw font-semibold">
        {t('splash/button')}
      </button>
    </div>
  );
};

export default SplashPage;
