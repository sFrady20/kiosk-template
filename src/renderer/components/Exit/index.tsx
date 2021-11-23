import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useContent, useStrings } from '../Content';
import Graphic from '../Graphic';

export const useAutoExit = () => {
  const navigate = useNavigate();

  const time = useContent((c) => c.config.autoExit);

  useEffect(() => {
    if (!time) return;

    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        navigate('/');
      }, time * 1000);
    };

    //start timer
    resetTimer();

    //listen for anything to reset timer
    const listener = () => {
      resetTimer();
    };
    document.addEventListener('mousemove', listener);
    document.addEventListener('mousedown', listener);
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('mousemove', listener);
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('keydown', listener);
      clearTimeout(timer);
    };
  }, [time]);
};

const Exit = () => {
  const navigate = useNavigate();

  const [exitText] = useStrings((c) => [c['exit']]);

  useAutoExit();

  return (
    <div className="absolute left-0 bottom-0 z-50">
      <div
        className="mx-1.7vw my-1.3vw p-1vw cursor-pointer flex flex-row items-center space-x-1vw"
        onClick={() => {
          navigate('/');
        }}
      >
        <Graphic className="w-1.5vw h-1.5vw" src="HomeIcon.svg" />
        <span className="text-size-1.1vw font-bold text-color-[#7C6992]">
          {exitText}
        </span>
      </div>
    </div>
  );
};

export default Exit;
