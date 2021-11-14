import React from 'react';
import { useNavigate } from 'react-router';
import t from '/@/util/t';
import Snow from '/@/components/Snow';

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Snow />
      <div className="flex flex-col items-start">
        <div className="text-size-7vw font-light max-w-55vw">
          {t('splash/title')}
        </div>
        <div
          onClick={() => navigate('/menu')}
          className="mt-5vw border-0.22vw border-black bg-none rounded-full px-3vw py-1.5vw text-size-1.7vw font-bold cursor-pointer"
        >
          {t('splash/button')}
        </div>
      </div>
    </>
  );
};

export default SplashPage;
