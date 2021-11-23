import React from 'react';
import { useNavigate } from 'react-router';
import Snow from '/@/components/Snow';
import { useStrings } from '/@/components/Content';
import Graphic from '/@/components/Graphic';

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
        <div className="text-size-6vw leading-7vw font-light w-50vw">
          {titleText}
        </div>
        <div
          onClick={() => navigate('/menu')}
          className="mt-5vw border-0.22vw border-[#2e1a47] bg-none rounded-full px-2vw py-1.5vw text-size-1.7vw font-bold cursor-pointer flex flex-row space-x-1vw"
        >
          <span>{buttonText}</span>
          <Graphic className="w-1.5vw" src="/RightArrowIcon.svg" />
        </div>
        <Graphic
          className="absolute left-0 bottom-0 w-full pointer-events-none"
          src="/HomeOverlay.png"
        />
      </div>
    </>
  );
};

export default SplashPage;
