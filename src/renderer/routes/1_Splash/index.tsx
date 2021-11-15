import React from 'react';
import { useNavigate } from 'react-router';
import Snow from '/@/components/Snow';
import { useStrings } from '/@/components/Content';

const SplashPage = () => {
  const navigate = useNavigate();

  const [titleText, buttonText] = useStrings((c) => [
    c['splash/title'],
    c['splash/button'],
  ]);

  return (
    <>
      <Snow />
      <div className="flex flex-col items-start">
        <div className="text-size-6vw leading-8vw font-light w-50vw">
          {titleText}
        </div>
        <div
          onClick={() => navigate('/menu')}
          className="mt-5vw border-0.22vw border-black bg-none rounded-full px-3vw py-1.5vw text-size-1.7vw font-bold cursor-pointer"
        >
          {buttonText}
        </div>
      </div>
    </>
  );
};

export default SplashPage;
